//액션 타입 선언
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
export const AddCart = (itemId:number) => {
    console.log(itemId);
    return {
        type: ADD_CART,
        payload: {
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

export const addTodo = (text:string, name:string) => ({
  type: ADD_TODO,
  payload: {
    id: Math.floor((Math.random()*1000)),
    name: name,
    text : text
  }  
});

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
  | ReturnType<typeof RemoveText>;