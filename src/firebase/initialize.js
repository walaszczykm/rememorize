import firebase from 'firebase'
import 'firebase/firestore'
import config from './config'
import { setUser, unsetUser } from '../state/user'

export default (dispatch) => {
  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUser(user))
    } else {
      dispatch(unsetUser())
    }
  })
}
