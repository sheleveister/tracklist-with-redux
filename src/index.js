import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

const reducerPlaylist = (state = initialState, action) => {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
};

const store = createStore(reducerPlaylist);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
