import React from 'react';
import CartMain from '../components/CartMain';
import OrderTotal from '../components/OrderTotal';

const ShoppingCart = ( Items:any ) => {
       return (
        <>
        <CartMain Items={Items}/>
        <OrderTotal/>
        </>
    )
}

export default ShoppingCart