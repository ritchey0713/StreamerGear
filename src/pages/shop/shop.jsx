// nested router file app renders this, this renders children routes
// match comes from react-router 
import React, { Component } from 'react'
import { Route } from "react-router-dom"
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from "../collection/collection"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase" 

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections")

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot)
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


export default ShopPage