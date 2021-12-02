import React from 'react';
import './Header.css'

const Header = () => (
         <div className="HeaderBox">
             <div className="MarketName">YongHee Market</div>
               <div className="ItemBox">
                 <div className="ItemList">상품 리스트</div>
                 <div className="ItemCount">장바구니 3개</div>
               </div>
             
         </div>   
    );

export default Header;