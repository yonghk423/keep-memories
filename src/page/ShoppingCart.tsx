import React from 'react';
import CartMain from '../components/CartMain';
import OrderTotal from '../components/OrderTotal';

const ShoppingCart = (CartItems:any) => {
    console.log(CartItems);
    return (
        <>
        <CartMain CartItems={CartItems}/>
        <OrderTotal/>
        </>
    )
}

export default ShoppingCart