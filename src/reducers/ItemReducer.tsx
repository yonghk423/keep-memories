import { ADD_CART, REMOVE_CART, SET_QUANTITY, CHANGE_TEXT, ADD_TO_LIST } from "../actions/index"
import { initialState } from '../asset/data'
console.log(initialState);

const ItemReducer = (state:any = initialState, action:any) => {
    console.log(state);
    console.log(action);    
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
        case CHANGE_TEXT:
          return {
            ...state,
            text: action.text
          };
        case ADD_TO_LIST:
          return {
            ...state,
            list: state.textBox.list.concat(action.item)
          }                  
            default:
      return state;
        }
    
}

export default ItemReducer