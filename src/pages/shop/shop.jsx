// nested router file app renders this, this renders children routes
// match comes from react-router 
import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shopSelectors'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from "../collection/collection"
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions"
import WithSpinner from "../../components/with-spinner/WithSpinner"

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

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
        // if this have no items found it wont show anything but wont break
          render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} 
        />
        <Route path={`${match.path}/:collectionId`} 
        // need isLoading to work differently, need it to have all the shop data before rendering, that page gets its data by finding things by a url
          render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
        />
      </div>

    )
  }
} 

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

export default connect(mapStateToProps, {
  fetchCollectionsStartAsync
})(ShopPage)