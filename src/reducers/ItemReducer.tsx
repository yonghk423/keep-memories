import { ADD_CART, REMOVE_CART, SET_QUANTITY,  ADD_TODO} from "../actions/index"
import { initialState } from '../asset/data'

const ItemReducer = (state:any = initialState, action:any) => {
    console.log(state);
    console.log(state.items);
    console.log(action.payload);
    
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
        case ADD_TODO:
          let data = state.items.find((ele:any) => (ele.id === action.payload.id))
          console.log(data);
          
          return state;       
            default:
      return state;
        }
    
}

export default ItemReducer