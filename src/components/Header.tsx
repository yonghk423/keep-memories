import React from 'react';
import './Header.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Header = () => {
    const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);    
    const navigate = useNavigate();
    const onClick = () => {
      navigate("/")
      window.location.reload()
    }

    return (
        <div className="HeaderBox">             
             <div className='header' style={{ textDecoration: 'none', color:'#f5f5f5' }} onClick={onClick}>추억을 담다</div>                       
         </div>
        )            
       };

export default Header;