import axios from "axios";

//액션 타입 선언
export const SET_DATA = "SET_DATA" as const;
export const SELECTED_ITEM = "SELECTED_ITEM" as const;
export const REMOVE_SELECTED_ITEM = "REMOVE_SELECTED_ITEM" as  const
export const ADD_CART = "ADD_CART" as const;
export const REMOVE_CART = "REMOVE_CART" as const;
export const SET_QUANTITY ="SET_QUANTITY" as const;
export const ADD_TODO = 'ADD_TODO' as const;
export const NOTIFY = 'NOTIFY' as const;
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION" as const;
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION" as const;
export const ADD_INFO ="ADD_INFO" as const;
export const REMOVE_ITEM = "REMOVE_ITEM" as const;
export const REMOVE_TEXT ="REMOVE_TEXT" as const;

//액션 생성 선언 함수
export const SetData = (data:any) => {
  console.log(data)
  return {
    type: SET_DATA,
    payload: data,
  }
} 
export const selectedItem = (data:any) => {
  console.log(data);
  return {
    type: SELECTED_ITEM,
    payload: data
  }
}

export const removeSelectedItem = (data:any) => {
  console.log(data)
  return {
    type: REMOVE_SELECTED_ITEM, 
    payload: data
  }
}

export const AddCart = (id:number) => async (dispatch:any) => {
  try {
    const addcart = await axios.post('http://localhost:8080/initialState/', { id, quantity: 1, })
    dispatch({type: ADD_CART, addcart})
    console.log(addcart)    
  } catch(err) {
    console.log("Error >>", err);
  }
}
export const RemoveCart = (id:number) => async (dispatch:any) => {
  try {
    const removecart = await axios.delete(`http://localhost:8080/initialState/cartItems/${id}`)
    dispatch({type: REMOVE_CART, removecart})
  } catch(err) {
    console.log("Error >>", err);
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

export const addTodo = (text:string, name:string) => {
  console.log(text, name)
  return {
    type: ADD_TODO,
  payload: {
    id: Math.floor((Math.random()*1000)),
    name: name,
    text : text
    }
  }
}

//액션 -> 미들웨어 -> 리듀서 -> 스토어
export const notify = (message: string, dismissTime:number = 5000) => (dispatch:any) => {
  console.log(dispatch);
  const uuid = Math.random()
  console.log(message);
  console.log(uuid);
  dispatch(enqueueNotification(message, dismissTime, uuid))
  setTimeout(() => {
    dispatch(dequeueNotification())
  }, dismissTime)
}

export const enqueueNotification = (message:string, dismissTime:number, uuid:number) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  }
}

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION
  }
}

export const addInfo = (name:string, imgUrl:string, price:string, text:string, textBox:Array<object>) => {
  console.log(name, imgUrl, price, text, textBox)
  return {
    type: ADD_INFO,
  payload : {
    id: Math.floor((Math.random()*1000)),
    name: name,
    img: imgUrl,
    price: Number(price),
    text: text,
    textBox : [{
      id: Math.floor((Math.random()*1000)),
      name: name,
      text: ''
    }]      
  }
  }
  
}

export const RemoveItem = (itemId:number) => {
  console.log(itemId);
  return {
        type: REMOVE_ITEM,
        payload : {
            itemId: itemId
        }
    }
}

export const RemoveText = (todoId:number) => {
  console.log(todoId)
  return {
        type: REMOVE_TEXT,
        payload : {
            todoId: todoId
        }
    }
}


export type Action =
  | ReturnType<typeof AddCart>
  | ReturnType<typeof RemoveCart>
  | ReturnType<typeof SetQuantity>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof notify>
  | ReturnType<typeof enqueueNotification>
  | ReturnType<typeof dequeueNotification>
  | ReturnType<typeof addInfo>
  | ReturnType<typeof RemoveItem>
  | ReturnType<typeof RemoveText>
  | ReturnType<typeof SetData>
  |ReturnType<typeof selectedItem>
  |ReturnType<typeof removeSelectedItem>;
  