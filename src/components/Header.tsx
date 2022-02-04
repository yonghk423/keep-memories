import React from 'react';
import './Header.scss'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Header = () => {
    const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);
    // console.log(state);
    // console.log(state.cartItems.length)
    return (
        <div className="HeaderBox">
             <Link to="/" style={{ textDecoration: 'none', color:'#f5f5f5' }}><div className="MarketName">Yonghee's photo shop</div></Link>
               <div className="ItemBox">
                 {/* <Link to="/" style={{ textDecoration: 'none', color:'#f5f5f5' }}><div className="ItemList">product list</div>
                 </Link> */}
                 <Link to="Main" style={{ textDecoration: 'none', color:'#f5f5f5' }}><div className="ItemCount">shopping cart {state.cartItems.length} </div></Link>
               </div>             
         </div>
        )            
       };

export default Header;