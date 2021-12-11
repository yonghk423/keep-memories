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

  const AddCart = ( ItemId:number ) => {
    const Find = CartItems.filter((ele:any):boolean => (ele.ItemId === ItemId))
    if(Find) {
      console.log('기존 리스트와 일치하는 상품')
      SettingQuantity(ItemId, Find.quantity + 1)
    }
    else{
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
console.log(CartItems);
  const SettingQuantity = (ItemdId: number, quantity: number) => {
    const Find:number = CartItems.filter((ele:any):boolean => (ele.ItemId === ItemdId))
    const Idx:number = CartItems.indexOf(Find)
    const CartItemsSetting = { ItemdId, quantity }  
  }

  return (
    <>    
    <BrowserRouter>
    <Header CartItems={CartItems}/>    
    <Routes>
      <Route path='/' element={<LandingPage Items={Items} AddCart={AddCart} />}/>
      <Route path="Main" element={<ShoppingCart Items={Items} CartItems={CartItems} />}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;
