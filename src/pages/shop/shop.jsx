// nested router file app renders this, this renders children routes
// match comes from react-router 
import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from "../collection/collection"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase" 
import { updateCollections } from "../../redux/shop/shopActions"
import WithSpinner from "../../components/with-spinner/WithSpinner"

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      // console.log(collectionsMap, "MAP")
      updateCollections(collectionsMap)
      this.setState({loading: false})
    })
  }
  render(){
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} 
        />
        <Route path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>

    )
  }
} 


export default connect(undefined, {
  updateCollections
})(ShopPage)