import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'
import createSagaMiddleware from 'redux-saga'
import { ApplicationState, rootReducer, rootSaga } from '.'

export const configureStore = (history: History): Store<ApplicationState> => {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    connectRouter(history)(rootReducer),
    undefined,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}
