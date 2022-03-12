import { SELECTED_ITEM} from '../actions/index'
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
        // case ADD_CART:
        //   console.log(action.addcart.data);
        //   return Object.assign({}, state, {cartItems: [action.addcart.data]})
        case SELECTED_ITEM:
          console.log(action.payload)
          return Object.assign({}, state, {items:[ action.payload ]})        
        default: return state;            
    }
}

export default SelectedReducer;