import { SELECTED_ITEM, REMOVE_SELECTED_ITEM } from '../actions/index'

import { Action } from '../actions/index'

const  initialState = {
  items: [],

  cartItems: [], 
  
  notifications: [

  ]   
}

const SelectedReducer = (state = initialState, action:any) => {
    console.log(action);
    console.log(action.payload);
    
    switch (action.type) {
        case SELECTED_ITEM:
          console.log(action.payload)
          return Object.assign({}, state, {items:[ action.payload ]})
        case REMOVE_SELECTED_ITEM:
          console.log(action.payload)
          return {};
        default: return state;            
    }
}

export default SelectedReducer;