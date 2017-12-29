import firebase from 'firebase'

// Actions
const LOAD_MEMORIES = 'LOAD_MEMORIES'
const ADD_MEMORY = 'ADD_MEMORY'
const UPDATE_MEMORY = 'UPDATE_MEMORY'

// Action creators
export const loadMemories = (memories) => ({
  type: LOAD_MEMORIES,
  payload: memories
})

export const addMemory = (memory) => ({
  type: ADD_MEMORY,
  payload: memory
})

export const updateMemory = (id, memory) => ({
  type: UPDATE_MEMORY,
  payload: {
    id,
    memory
  }
})

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD_MEMORIES:
      return action.payload

    case ADD_MEMORY:
      return [...state, action.payload]

    case UPDATE_MEMORY:
      return [...state.filter(m => m.id !== action.payload.id), action.payload.memory]

    default:
      return state
  }
}

// Thunks
export const fetchMemories = () => (dispatch, getState) => {
  const state = getState()
  if (!state.user.email) {
    return Promise.reject(new Error('user object not exist in state'))
  }

  const db = firebase.firestore()
  let memories = []

  return db.collection('memories')
  .where('owner', '==', state.user.email)
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      memories.push({...doc.data(), id: doc.id})
    })

    dispatch(loadMemories(memories))
  })
}

export const createMemory = (memory) => (dispatch, getState) => {
  const state = getState()
  if (!state.user.email) {
    return Promise.reject(new Error('user object not exist in state'))
  }

  const db = firebase.firestore()
  return db.collection('memories')
  .add({ ...memory, owner: state.user.email })
  .then(doc => dispatch(addMemory({...memory, id: doc.id})))
}

export const setMemory = (id, memory) => (dispatch, getState) => {
  const state = getState()
  if (!state.user.email) {
    return Promise.reject(new Error('user object not exist in state'))
  }

  const db = firebase.firestore()
  return db.collection('memories')
  .doc(id)
  .set({ ...memory, owner: state.user.email })
  .then(() => dispatch(updateMemory(id, memory)))
}
