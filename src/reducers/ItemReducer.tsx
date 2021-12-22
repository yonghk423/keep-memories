import { ADD_CART, REMOVE_CART, SET_QUANTITY } from "../actions/index"
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
        case SET_QUANTITY:
            let idx = state.cartItems.findIndex((ele:any) => ele.itemId === action.payload.itemId)
          return Object.assign({}, state, {
            cartItems: [...state.cartItems.slice(0, idx), action.payload,
            ...state.cartItems.slice(idx + 1)]
          });
                  
            default:
      return state;
        }
    
}

export default ItemReducer