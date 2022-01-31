//액션 타입 선언
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SET_QUANTITY ="SET_QUANTITY"
export const ADD_TODO = 'ADD_TODO';


//액션 생성 선언 함수
export const AddCart = (itemId:number) => {
    console.log(itemId);
    return {
        type: ADD_CART,
        payload : {
            quantity: 1,
            itemId
        }
    }
}

export const RemoveCart = (itemId:number) => {
    console.log(itemId);
    return {
        type: REMOVE_CART,
        payload : {
            itemId
        }
    }
}

export const SetQuantity = (quantity:number, itemId:number) => {
    console.log(quantity, itemId);
    return {
        type: SET_QUANTITY,
        payload : {
            quantity,
            itemId
        }
    }
}


export const addTodo = (text:any, id:any) => ({
  type: ADD_TODO,
  payload: {
    id : id,
    text : text
  }  
});
