//pulling in the firebase utility library that belongs to 'firebase/app'
import firebase from "firebase/app"
//for the database
import "firebase/firestore"
//for the auth
import "firebase/auth"

// Paste from your firebase project
const config = {
  apiKey: "AIzaSyAqQxkBoSsa5JOXCMvEL5eXjLrJfGLGS58",
  authDomain: "crwn-db-809f3.firebaseapp.com",
  databaseURL: "https://crwn-db-809f3.firebaseio.com",
  projectId: "crwn-db-809f3",
  storageBucket: "crwn-db-809f3.appspot.com",
  messagingSenderId: "965924115432",
  appId: "1:965924115432:web:da7173379879135f788a5d",
  measurementId: "G-R3BKLE09BH"
}

// get user from auth library and store it in database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  // process to check if data exist
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // create data
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//set google authentification utility
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
