import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from "./firebaseSecrets"

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return 

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(e) {
      console.log("could not create user", e.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)

  // create one large request, makes sure if something like internet failure we dont save only half our objs
  const batch = firestore.batch()
  objsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {

  // access nested array by calling docs on a passed in collection, a snapshot
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLocaleLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export default firebase