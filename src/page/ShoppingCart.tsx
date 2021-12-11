import React from 'react';
import CartMain from '../components/CartMain';
import OrderTotal from '../components/OrderTotal';

const ShoppingCart = (CartItems:any ,Items:any) => {
    console.log(CartItems);
    return (
        <>
        <CartMain CartItems={CartItems} Items={Items}/>
        <OrderTotal/>
        </>
    )
}

export default ShoppingCart