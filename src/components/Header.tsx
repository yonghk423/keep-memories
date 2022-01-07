import React from 'react';
import './Header.css'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Header = () => {
    const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);
    console.log(state);
    console.log(state.cartItems.length)
    return (
        <div className="HeaderBox">
             <Link to="/" style={{ textDecoration: 'none', color:'#fff176' }}><div className="MarketName">YongHee Market</div></Link>
               <div className="ItemBox">
                 <Link to="/" style={{ textDecoration: 'none', color:'#fff176' }}><div className="ItemList">상품 리스트</div></Link>
                 <Link to="Main" style={{ textDecoration: 'none', color:'#fff176' }}><div className="ItemCount">장바구니 {state.cartItems.length}개</div></Link>
               </div>             
         </div>
        )            
       };

export default Header;