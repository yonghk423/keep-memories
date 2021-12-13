import React from 'react';
import './CartMain.css';

const CartMain = ( Items:any ) => {
  console.log(Items);
  console.log(Items.Items.Items);
  console.log(Items.Items.CartItems);

  const ItemsList:object[] = Items.Items.Items;
  const CartItemsList:object[] = Items.Items.CartItems;
  const MatchingItems:object[] = ItemsList.filter((ele:any) => CartItemsList.map((ele:any) => ele.ItemId).indexOf(ele.id) > -1)
  //다시 고민해보기
  console.log(MatchingItems);

    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input type="checkbox" id="scales" name="" checked/>
            <label>전체선택</label>
          </div>
            {MatchingItems.map((item:any ) => (
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