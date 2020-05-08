import ShopActionTypes from "./shop.types"
import { firestore } from "../../firebase/firebase"


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections")

    collectionRef.get().then(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //updateCollections(collectionsMap)
        this.setState({loading: false})
      })
  }
}
