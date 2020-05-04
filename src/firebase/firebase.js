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

export const addCollectionAndDocuments = (collectionKey, objsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)
}

export default firebase