import React from 'react';
import './App.css';
import LandingPage from './page/LandingPage';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShoppingCart from './page/ShoppingCart';

function App() {
  return (
    <>    
    <BrowserRouter>
    <Header/>    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="Main" element={<ShoppingCart/>}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;
