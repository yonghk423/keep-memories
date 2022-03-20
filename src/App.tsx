import './App.css';
import LandingPage from './page/LandingPage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
import NofiticationCenter from './components/ NofiticationCenter/NofiticationCenter'
import Footer from './components/Footer';
import LandingDetailPage from './page/LandingDetailPage';

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
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/DetailPage/:id" element={<LandingDetailPage/>}></Route>     
    </Routes>
    <NofiticationCenter/>    
    </BrowserRouter>        
    </>
  )
}

export default App;