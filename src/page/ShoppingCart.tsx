import React from 'react';
import CartMain from '../components/CartMain';
import OrderTotal from '../components/OrderTotal';

const ShoppingCart = ( Items:any ) => {
     console.log(Items);
       return (
        <>
        <CartMain Items={Items}/>
        <OrderTotal/>
        </>
    )
}

export default ShoppingCart