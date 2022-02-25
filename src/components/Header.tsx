import React from 'react';
import './Header.scss'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Header = () => {
    const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);    
    return (
        <div className="HeaderBox">
             <Link to="/" style={{ textDecoration: 'none', color:'#f5f5f5' }}><div className="MarketName">coffee coupon shop</div></Link>
               <div className="ItemBox">
                 {/* <Link to="/" style={{ textDecoration: 'none', color:'#f5f5f5' }}><div className="ItemList">product list</div>
                 </Link> */}
                 <Link to="Main" style={{ textDecoration: 'none', color:'#f5f5f5' }}><div className="ItemCount">shopping cart {state.cartItems.length} </div></Link>
               </div>             
         </div>
        )            
       };

export default Header;