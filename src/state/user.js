import firebase from 'firebase'
import { loadMemories } from './memories'

// Actions
const SET_USER = 'SET_USER'
const UNSET_USER = 'UNSET_USER'

// Action creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const unsetUser = () => ({
  type: UNSET_USER
})

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload

    case UNSET_USER:
      return {}

    default:
      return state
  }
}

// Thunks
export const signUp = (email, password) => (dispatch) => firebase.auth().createUserWithEmailAndPassword(email, password)

export const signIn = (email, password) => (dispatch) => firebase.auth().signInWithEmailAndPassword(email, password)

export const signOut = () => (dispatch) => firebase.auth().signOut().then(() => dispatch(loadMemories([])))
