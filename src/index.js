import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'mobx-react'
<<<<<<< Updated upstream
import { ExampleStore } from './stores'

const stores = {
  exampleStore: new ExampleStore(),
=======
import { ExampleStore, RouterStore } from './stores'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const routingStore = new RouterStore()
const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, routingStore)

const stores = {
  exampleStore: new ExampleStore(),
  routing: new RouterStore(),
>>>>>>> Stashed changes
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
