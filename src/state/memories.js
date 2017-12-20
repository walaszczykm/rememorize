import firebase from 'firebase'

// Actions
const LOAD_MEMORIES = 'LOAD_MEMORIES'
const ADD_MEMORY = 'ADD_MEMORY'

// Action creators
export const loadMemories = (memories) => ({
  type: LOAD_MEMORIES,
  payload: memories
})

export const addMemory = (memory) => ({
  type: ADD_MEMORY,
  payload: memory
})

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD_MEMORIES:
      return action.payload

    case ADD_MEMORY:
      return [...state, action.payload]

    default:
      return state
  }
}

// Thunks
export const fetchMemories = () => dispatch => {
  const db = firebase.firestore()
  let memories = []

  return db.collection('memories').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      memories.push({...doc.data(), id: doc.id})
    })

    dispatch(loadMemories(memories))
  })
}

export const createMemory = (memory) => dispatch => {
  const db = firebase.firestore()
  return db.collection('memories').add(memory).then(doc => dispatch(addMemory({...memory, id: doc.id})))
}
