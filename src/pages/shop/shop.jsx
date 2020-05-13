// nested router file app renders this, this renders children routes
// match comes from react-router 
import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer'
import CollectionPageContainer from "../collection/CollectionContainer"
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions"
import WithSpinner from "../../components/with-spinner/WithSpinner"

//const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
//const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  componentDidMount() {
    // const { updateCollections } = this.props
    // const collectionRef = firestore.collection("collections")

    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   // console.log(collectionsMap, "MAP")
    //   updateCollections(collectionsMap)
    //   this.setState({loading: false})
    // })

    // const { updateCollections } = this.props
    // const collectionRef = firestore.collection("collections")

    // collectionRef.get().then(async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //     updateCollections(collectionsMap)
    //     this.setState({loading: false})
    //   })

      // fetch("https://firestore.googleapis.com/v1/projects/streamshop-db/databases/(default)/documents/collections")
      //   .then(resp => resp.json())
      //   .then(data => console.log(data, "HELLLLOOO"))

      const { fetchCollectionsStartAsync } = this.props
      fetchCollectionsStartAsync()
    }
    
    render(){
      const { match, isCollectionFetching, isCollectionLoaded } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        
          //render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}
          component={CollectionsOverviewContainer} 
        />
        <Route path={`${match.path}/:collectionId`} 
        
          //render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
          component={CollectionPageContainer}
        />
      </div>

    )
  }
} 

const mapStateToProps = createStructuredSelector({
  // if this have no items found it wont show anything but wont break
  // moved to collection container file
  //isCollectionFetching: selectIsCollectionFetching,
  // need isLoading to work differently, have to pass state in the mapstatetoprops from the collections comp here,  need it to have all the shop data before rendering, that page gets its data by finding things by a url
  //isCollectionLoaded: selectIsCollectionLoaded
})

export default connect(mapStateToProps, {
  fetchCollectionsStartAsync
})(ShopPage)