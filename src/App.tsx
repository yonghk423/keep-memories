import React, { useState } from 'react';
import './App.css';
import LandingPage from './page/LandingPage';
import ShoppingCart from './page/ShoppingCart';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialState } from './asset/data';

export interface DataList {
  Items : object[];
}
export interface CartDataList {
  CartItems: any;  
}
function App() {    
  const [Items, setItems] = useState<DataList['Items']>(initialState.items);
  const [CartItems, setCartItems] = useState<CartDataList['CartItems']>(initialState.cartItems)

  const AddCart = ( ItemId:any ) => {
    const Find = CartItems.filter((ele:any) => (ele.ItemId === ItemId))
    if(Find) {
      SettingQuantity(ItemId, Find.quantity + 1)
    }
  }

  const SettingQuantity = (ItemdId: any, quantity: any) => {
    const Find = CartItems.filter((ele:any) => (ele.ItemId === ItemdId))
    const Idx = CartItems.indexOf(Find)
    const CartItemsSetting = { ItemdId, quantity }  
  }

  return (
    <>    
    <BrowserRouter>
    <Header CartItems={CartItems}/>    
    <Routes>
      <Route path='/' element={<LandingPage Items={Items} AddCart={AddCart} />}/>
      <Route path="Main" element={<ShoppingCart CartItems={CartItems} />}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;
