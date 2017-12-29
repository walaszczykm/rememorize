import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import memories from './memories'
import user from './user'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
  combineReducers({
    memories,
    user
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
