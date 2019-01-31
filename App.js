import React from 'react'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import Main from './Main'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}