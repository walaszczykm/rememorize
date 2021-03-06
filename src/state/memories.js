import firebase from 'firebase'

// Actions
const LOAD_MEMORIES = 'LOAD_MEMORIES'
const ADD_MEMORY = 'ADD_MEMORY'
const UPDATE_MEMORY = 'UPDATE_MEMORY'
const REMOVE_MEMORY = 'REMOVE_MEMORY'

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

export const removeMemory = (id) => ({
  type: REMOVE_MEMORY,
  payload: id
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

    case REMOVE_MEMORY:
      return [...state.filter(m => m.id !== action.payload)]

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

    console.log(memories)
    memories = memories.sort(function (a, b) { return new Date(b.date) - new Date(a.date) })
    console.log(memories)
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
  memory = { ...memory, owner: state.user.email }
  return db.collection('memories')
  .doc(id)
  .set(memory)
  .then(() => dispatch(updateMemory(id, memory)))
}

export const deleteMemory = (id) => (dispatch) => {
  const db = firebase.firestore()

  return db.collection('memories')
  .doc(id)
  .delete()
  .then(() => dispatch(removeMemory(id)))
}
