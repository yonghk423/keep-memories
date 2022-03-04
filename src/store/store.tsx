import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index'
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(ReduxThunk)))

export default store;