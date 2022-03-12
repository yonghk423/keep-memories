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
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(applyMiddleware(ReduxThunk))
); // 여러개의 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}/> */}
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
