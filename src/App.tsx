import React from 'react';
import './App.css';
import LandingPage from './page/LandingPage';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>    
    <BrowserRouter>
    <Header/>    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;
