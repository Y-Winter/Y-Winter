import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'  // 分发异步action
import {Provider,} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Reducers from './reducers/index'


const store = createStore(
  Reducers,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();
