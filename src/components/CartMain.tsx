import React from 'react';
import './CartMain.css';

const CartMain = ( CartItems:any , Items:any ) => {
  const CartItemsList:object[] = CartItems.CartItems.CartItems;
  console.log(CartItemsList);
    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input type="checkbox" id="scales" name="" checked/>
            <label>전체선택</label>
          </div>
            {CartItemsList.map((item:any) => (
            <li className="CartContainer" key={item.id}> 
              <input className="Check" type="checkbox" id="scales" name="" checked/>
            <img className="CartImg" src={item.img} alt=""/>
            <div className="Item">
              <div>{item.name}</div>
              <div>{item.price}</div>
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