//액션 타입 선언
export const ADD_CART = "ADD_CART" as const;
export const REMOVE_CART = "REMOVE_CART" as const;
export const SET_QUANTITY ="SET_QUANTITY" as const;
export const ADD_TODO = 'ADD_TODO' as const;
export const NOTIFY = 'NOTIFY' as const;
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION" as const;
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION" as const;

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

let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = (text:any, name:string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId = nextId + 1, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
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

export const addInfo = () => {
  
}

export type Action =
  | ReturnType<typeof AddCart>
  | ReturnType<typeof RemoveCart>
  | ReturnType<typeof SetQuantity>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof notify>
  | ReturnType<typeof enqueueNotification>
  | ReturnType<typeof dequeueNotification>;