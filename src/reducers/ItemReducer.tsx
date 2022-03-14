import {SET_DATA, ADD_CART, REMOVE_CART, SET_QUANTITY, 
  ADD_TODO, ADD_INFO, REMOVE_ITEM, REMOVE_TEXT, 
  // SELECTED_ITEM 
} from "../actions/index"
// import { initialState } from '../asset/data'
import { Action } from "../actions/index"
const  initialState = {
  items: [],

  cartItems: [], 
  
  notifications: [

  ]   
}

const ItemReducer = (state:any = initialState, action:any) => {
    console.log(state);
    console.log(action);    
    switch (action.type) {         
        case SET_DATA:          
          return Object.assign({}, state, action.payload)
        // case SELECTED_ITEM:
        //   console.log(action.payload)
        //   return Object.assign({}, state, {items:[ action.payload ]})              
        case ADD_CART:
          console.log(action.addcart.data);
          return Object.assign({}, state, {cartItems: [action.addcart.data]})
        case REMOVE_CART:         
          return Object.assign({}, state, {
            cartItems: [ state.cartItems.filter((ele:any) => ele.id !== action.removecart.data )]
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
          // addData라는 변수에 action.payload 넣고
          const addData = Object.assign({}, data, { textBox: [...data.textBox, action.payload]})
          console.log(addData);
          // 데이터를 전체 state 값들과 합친다.
          // const addDataTotal = Object.assign({}, state, { items: [...state.items, addData]})
          // console.log(addDataTotal);   
              for (let i = 0; i<state.items.length; i++ ) {
                if(state.items[i].name === addData.name) {
                state.items[i] = addData
              }
            }      
          return Object.assign({}, state)
          
          case ADD_INFO:
            //받은 데이터를 items 배열에 추가 시킨다
            return Object.assign({}, state, { items : [...state.items, action.payload] })       
          case REMOVE_ITEM:
            return Object.assign(
              {}, 
              state, 
              { items: state.items.filter((ele:any) => ele.id !== action.payload.itemId ) },
              { cartItems: state.cartItems.filter((ele:any) => ele.itemId !== action.payload.itemId)}
          )
          case REMOVE_TEXT:
            console.log(action.payload.todoId)
              //같은 아이디가 담긴 데이터를 찾는다
              //filter를 두번 사용한다..?
              let textData = state.items.find((ele:any)=> (
                ele.textBox.find((ele:any)=> (
                  ele.id === action.payload.todoId
                ))
              ))
              console.log(textData);
              console.log(textData.textBox);
              let todoData = textData.textBox.filter((ele:any)=> (
                ele.id !== action.payload.todoId
              ))
              console.log(todoData);
              //filter로 삭제를 시켰다
              //이제 이 데이터를 다시 기존 데이터에 할당을 시켜야 한다.
              console.log(textData.textBox);
              textData.textBox = todoData;
              console.log(textData);
              //할당 시켰다면 기존 items 데이터에 다시 재할당
              // let itemsData
              for (let i = 0; i<state.items.length; i++ ) {
                if(state.items[i].id === textData.id) {
                state.items[i] = textData;
              }
            }      
            console.log(state.items)
              //할당 시켰다면 전체 데이터와 합쳐야 한다.               
              return Object.assign({}, state, { ...state.items })
          default: return state;
        }
    
}

export default ItemReducer