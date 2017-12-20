import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import memories from './memories'
import { composeWithDevTools } from 'redux-devtools-extension'

export default () => createStore(
  combineReducers({
    memories
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
