import { ADD_CART, REMOVE_CART, SET_QUANTITY,  ADD_TODO} from "../actions/index"
import { initialState } from '../asset/data'
import { Action } from "../actions/index"

const ItemReducer = (state:any  = initialState, action:any) => {
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
          // name이 같은 데이터를 찾는다 
          let data = state.items.find((ele:any) => (ele.name === action.payload.name))
          console.log(data); 
          // data라는 변수에 action.payload 넣고
          const test = Object.assign({}, data, { textBox: [...data.textBox, action.payload]})
          console.log(test);
          // 데이터를 전체 state 값들과 합친다.
          const test2 = Object.assign({}, state, {items : [...state.items, test]})
          console.log(test2);   
              for (let i = 0; i<state.items.length; i++ ) {
            if(state.items[i].name === test.name) {
              state.items[i] = test
            }
          }
          console.log(state);
          console.log(state.items)
          return Object.assign({}, state)      
            default:
      return state;
        }
    
}

export default ItemReducer