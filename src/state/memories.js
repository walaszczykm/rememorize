import firebase from 'firebase'

// Actions
const LOAD_MEMORIES = 'LOAD_MEMORIES'

// Action creators
export const loadMemories = (memories) => ({
  type: LOAD_MEMORIES,
  payload: memories
})

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD_MEMORIES:
      return action.payload

    default:
      return state
  }
}

// Thunks
export const fetchMemories = () => dispatch => {
  const db = firebase.firestore()
  let memories = []

  db.collection('memories').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      memories.push(doc.data())
    })

    dispatch(loadMemories(memories))
  })
}
