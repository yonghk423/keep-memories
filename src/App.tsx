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
  
  return (
    <>    
    <BrowserRouter>
    <Header/>    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="Main" element={
      <ShoppingCart      
      />}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;