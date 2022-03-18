import './App.css';
import LandingPage from './page/LandingPage';
import ShoppingCart from './page/ShoppingCart';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
import NofiticationCenter from './components/ NofiticationCenter/NofiticationCenter'
// import { initialState } from './asset/data';

const http = require("http");
 
/* Prevent Sleep in Heroku Server */
setInterval(function () {
  http.get("http://everycoding.herokuapp.com");
}, 600000); // every 10 minutes

export interface DataList {
  Items : object[];
}
export interface CartDataList {
  CartItems: object[];  
}
function App() {      
  return (
    <>    
    <BrowserRouter>
    <Header/>    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      {/* <Route path="ShoppingCart" element={<ShoppingCart/>}/> */}
      <Route path="/DetailPage/:id" element={<DetailPage/>}></Route>
    </Routes>
    <NofiticationCenter/>    
    </BrowserRouter>      
    </>
  )
}

export default App;