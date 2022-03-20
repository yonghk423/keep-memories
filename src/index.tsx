import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';

// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// const persistor = persistStore(store);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}/> */}
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
