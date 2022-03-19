import './App.css';
import LandingPage from './page/LandingPage';
import ShoppingCart from './page/ShoppingCart';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
import NofiticationCenter from './components/ NofiticationCenter/NofiticationCenter'
import DataModal from './components/ModalData';
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
      {/* <Route path="ShoppingCart" element={<ShoppingCart/>}/> */}
      <Route path="/DetailPage/:id" element={<DetailPage/>}></Route>
      {/* <Route path="/DataModal/:id" element={<DataModal open={false} close={function (): void {
            throw new Error('Function not implemented.');
          } }/>}></Route> */}
    </Routes>
    <NofiticationCenter/>    
    </BrowserRouter>      
    </>
  )
}

export default App;