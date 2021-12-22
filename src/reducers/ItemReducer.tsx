import { ADD_CART, REMOVE_CART } from "../actions/index"
import { initialState } from '../asset/data'
console.log(initialState);

const ItemReducer = (state = initialState, action:any) => {
    console.log(state);
    console.log(action);
    // payload: {quantity: 1, itemId: 2}
    // type: "ADD_CART"
    switch (action.type) {
        case ADD_CART:
          return Object.assign({}, state, { cartItems: [...state.cartItems, action.payload]})
        case REMOVE_CART:
          return Object.assign({}, state, {
            cartItems: state.cartItems.filter((ele:any) => ele.itemId !== action.payload.itemId )
          })
    
        default:
      return state;
        }
    
}

export default ItemReducer