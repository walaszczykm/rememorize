import firebase from 'firebase'
import 'firebase/firestore'
import config from './config'
import { setUser, unsetUser } from '../state/user'

export default (dispatch) => {
  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged((state) => {
    if (state) {
      firebase.firestore().collection('users').doc(state.email).get()
      .then(doc => {
        if (doc.exists) {
          let user = doc.data()
          dispatch(setUser({ email: state.email, name: user.name, lastname: user.lastname }))
        }
      })
    } else {
      dispatch(unsetUser())
    }
  })
}
