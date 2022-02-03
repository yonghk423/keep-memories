import  { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
        ItemReducer, notificationReducer
});

export default rootReducer;

