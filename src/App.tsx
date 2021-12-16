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
  const [CartItems, setCartItems] = useState<CartDataList['CartItems']>(initialState.cartItems);  
  
  const AddCart = ( ItemId:number ) => {    
    const Find = CartItems.filter((ele:any):boolean => (ele.ItemId === ItemId))[0]
    if(Find) {
      console.log('기존 리스트와 일치하는 상품')
      SettingQuantity( Find.quantity + 1, ItemId )
    }
    else {
      console.log('새로운 상품 추가')
      setCartItems( 
        [...CartItems,
          {
            ItemId,
            quantity: 1
          }
        ])
    }
  }
  const SettingQuantity = ( quantity: number, ItemId: number) => {
    const Find:number = CartItems.filter((ele:any):boolean => (ele.ItemId === ItemId))[0]
    const Idx:number = CartItems.indexOf(Find)
    const CartItemsSetting:object = { 
      ItemId, 
      quantity 
    }  
  
    setCartItems([
      ...CartItems.slice(0, Idx),
      CartItemsSetting,
      ...CartItems.slice(Idx + 1)
    ])
  }
  
  return (
    <>    
    <BrowserRouter>
    <Header CartItems={CartItems}/>    
    <Routes>
      <Route path='/' element={<LandingPage Items={Items} AddCart={AddCart} />}/>
      <Route path="Main" element={
      <ShoppingCart 
      Items={Items} 
      CartItems={CartItems} 
      SettingQuantity={SettingQuantity}
      setCartItems={setCartItems}
      />}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;