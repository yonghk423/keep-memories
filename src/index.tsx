import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index'
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// const persistor = persistStore(store);

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}/> */}
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
