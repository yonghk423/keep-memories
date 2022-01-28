import './App.css';
import LandingPage from './page/LandingPage';
import ShoppingCart from './page/ShoppingCart';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
// import { initialState } from './asset/data';

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
      <Route path="Main" element={<ShoppingCart/>}/>
      <Route path="/DetailPage/:data" element={<DetailPage/>}></Route>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App;