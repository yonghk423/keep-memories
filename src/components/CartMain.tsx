import React from 'react';
import './CartMain.css';

const CartMain = ( CartItems:any ) => {
  const CartItemsList:object[] = CartItems.CartItems.CartItems;
  
    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input type="checkbox" id="scales" name="" checked/>
            <label>전체선택</label>
          </div>
            {CartItemsList.map((ele:any) => (
            <li className="CartContainer" key={ele.id}> 
              <input className="Check" type="checkbox" id="scales" name="" checked/>
            <img className="CartImg" src={ele.img} alt=""/>
            <div className="Item">
              <div>{ele.name}</div>
              <div>{ele.price}</div>
            </div>
            <div className="Settiing">
              <button className="DelBtn">삭제</button>
              <input className="NumberSetting" type="number"/>
            </div>
            </li>
            ))}                      
          
          </>
    )
}

export default CartMain;