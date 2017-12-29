import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import initFirebase from './firebase/initialize'
import App from './App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'

initFirebase(store.dispatch)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
