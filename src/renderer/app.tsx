import * as React from 'react'
import { createHashHistory } from 'history'
import { configureStore } from './store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Routes } from './routes'

const history = createHashHistory()

const store = configureStore(history)

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}
