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
export const SetData = (data:object[]) => {
  console.log(data)
  return {
    type: SET_DATA,
    payload: data,
  }
} 
export const selectedItem = (data:number) => {
  console.log(data);
  return {
    type: SELECTED_ITEM,
    payload: data
  }
}

export const removeSelectedItem = (data:number) => {
  console.log(data)
  return {
    type: REMOVE_SELECTED_ITEM, 
    payload: data
  }
}

export const AddCart = (id:number) => async (dispatch:any) => {
  try {
    const addcart = await axios.post('https://everycoding.herokuapp.com', { id, quantity: 1, })
    dispatch({type: ADD_CART, addcart})
    console.log(addcart)    
  } catch(err) {
    console.log("Error >>", err);
  }
}
export const RemoveCart = (id:number) => async (dispatch:any) => {
  try {
    const removecart = await axios.delete(`https://everycoding.herokuapp.com/cartItems/${id}`)
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

export const addInfo = (name:string, imgUrl:string, price:string, text:string, textBox:object[]) => async (dispatch:any) => {
  try {
    const addinfo = await axios.post('https://everycoding.herokuapp.com/info', {
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
    })
    dispatch({type: ADD_INFO, addinfo})
    console.log(addinfo)
  } catch(err) {
    console.log("Error >>", err);
  }
}

export const RemoveItem = (id:number) => async(dispatch:any) => {
  console.log(id)
  try {
    const removeitem = await axios.delete(`https://everycoding.herokuapp.com/items/${id}`)
    dispatch({type: REMOVE_ITEM, removeitem})
  } catch(err) {
    console.log("Error >>", err);
  }  
}

export const RemoveText = (id:number) => async(dispatch:any) => {
  console.log(id)
  try {
    const removetext = await axios.delete(`https://everycoding.herokuapp.com/items/${id}/textBox/${id}/`)
    dispatch({type: REMOVE_TEXT, removetext})
  } catch(err) {
    console.log("Error >>", err);
  }  
}

export const addTodo = (text:string, name:string) => async (dispatch:any) => {
  try {
    const addtodo = await axios.post('https://everycoding.herokuapp.com/addTodo', {
    id: Math.floor((Math.random()*1000)),
    name: name,
    text : text
    })
    dispatch({type: ADD_TODO, addtodo}) 
  } catch(err) {
    console.log("Error >>", err);
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
  | ReturnType<typeof selectedItem>
  | ReturnType<typeof removeSelectedItem>;
  