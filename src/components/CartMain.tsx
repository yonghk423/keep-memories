import React, { useState } from 'react';
import './CartMain.css';

const CartMain = ( Items:any ) => {
  console.log(Items);
  console.log(Items.Items.Items);
  console.log(Items.Items.CartItems);
  console.log(Items.Items.SettingQuantity);
  console.log(Items.Items.setCartItems)
  const ItemsList:object[] = Items.Items.Items;
  const CartItemsList:any = Items.Items.CartItems;
  const MatchingItems:object[] = ItemsList.filter((ele:any) => CartItemsList.map((ele:any) => ele.ItemId).indexOf(ele.id) > -1)
  const SettingQuantityData:any = Items.Items.SettingQuantity;
  const SetCartItems = Items.Items.setCartItems;
  let data = CartItemsList.map((ele:any) => (ele.ItemId))
  console.log(data);
  const [CheckedItems, setCheckedItems] = useState(data);

  const RemoveCart = (ItemId:number) => {
    SetCartItems(CartItemsList.filter((ele:any) => ele.ItemId !== ItemId ))
    setCheckedItems(CheckedItems.filter((ele:any) => ele !== ItemId))
  }  

  console.log(CheckedItems);  
  console.log(MatchingItems);
  console.log(SettingQuantityData);
    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input type="checkbox" id="scales" name="" checked/>
            <label>전체선택</label>
          </div>
            {MatchingItems.map((item:any ) => {
            const quantity = CartItemsList.filter((ele:any) => ele.ItemId === item.id)[0].quantity  
            return <li className="CartContainer" key={item.id}> 
              <input className="Check" type="checkbox" id="scales" name="" checked/>
            <img className="CartImg" src={item.img} alt=""/>
            <div className="Item">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
            <div className="Settiing">
              <button className="DelBtn" onClick={() => {RemoveCart(item.id)}}>삭제</button>
              <input 
              className="NumberSetting" 
              type="number"
              value={quantity}
              onChange={(e) => {
                SettingQuantityData(Number(e.target.value), item.id)
              }}
              />
            </div>
            </li>
            })}                                
          </>
    )
}

export default CartMain;