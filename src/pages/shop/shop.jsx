// nested router file app renders this, this renders children routes
// match comes from react-router 
import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from "../collection/collection"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase" 
import { updateCollections } from "../../redux/shop/shopActions"

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      // console.log(collectionsMap, "MAP")
      updateCollections(collectionsMap)
    })
  }
  render(){
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>

    )
  }
} 


export default connect(undefined, {
  updateCollections
})(ShopPage)