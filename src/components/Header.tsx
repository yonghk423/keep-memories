import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => (
         <div className="HeaderBox">
             <div className="MarketName">YongHee Market</div>
               <div className="ItemBox">
                 <Link to="/"><div className="ItemList">상품 리스트</div></Link>
                 <Link to="Main"><div className="ItemCount">장바구니 3개</div></Link>
               </div>             
         </div>   
    );

export default Header;