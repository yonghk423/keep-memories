//액션 타입 선언
export const ADD_CART = "ADD_CART";

export const AddCart = (itemId:any) => {
    return {
        type: ADD_CART,
        payload : {
            quantity: 1,
            itemId
        }
    }
}