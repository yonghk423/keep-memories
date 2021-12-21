import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartMain.css';
import OrderTotal from './OrderTotal';

export interface ItemReducer {
        ItemReducer : object[]
}

const CartMain = () => {
  
  const state = useSelector<ItemReducer>(state=> state.ItemReducer);
  const disPatch =useDispatch();
  const {items, cartItems}:any = state;
  console.log({items, cartItems})
  // const ItemsList:any = Items.Items.Items;
  // const CartItemsList:any = Items.Items.CartItems;
  const MatchingItems:object[] = items.filter((ele:any) => cartItems.map((ele:any) => ele.itemId).indexOf(ele.id) > -1)
  // const SettingQuantityData:any = Items.Items.SettingQuantity;
  // const SetCartItems = Items.Items.setCartItems;
  let data = cartItems.map((ele:any) => (ele.itemId))
  console.log(data);
  const [checkedItems, setCheckedItems] = useState(data);

  // const RemoveCart = (ItemId:number) => {
  //   SetCartItems(CartItemsList.filter((ele:any) => ele.ItemId !== ItemId ))
  //   setCheckedItems(CheckedItems.filter((ele:any) => ele !== ItemId))
  // } 
  
  // const getTotal = () => {
  //   let cartIdArr = CartItemsList.map((ele:any) => ele.ItemId)
  //   console.log(cartIdArr);
  //   let total = {
  //     price: 0,
  //     quantity: 0,
  //   }
  //   for (let i = 0; i < cartIdArr.length; i++) {
  //     if (CheckedItems.indexOf(cartIdArr[i]) > -1) {
  //       let quantity = CartItemsList[i].quantity
  //       let price = ItemsList.filter((ele:any) => ele.id === CartItemsList[i].ItemId)[0].price        
  //       total.price = total.price + quantity * price
  //       total.quantity = total.quantity + quantity        
  //     }
  //   }
  //   return total
  // }
  // const total = getTotal()

  // const HandleAllCheck = (checked:any) => {
  //   if(checked) {
  //     setCheckedItems(CartItemsList.map((ele:any)=> (ele.ItemId)))
  //   }
  //   else {
  //     setCheckedItems([]);
  //   }
  // }

  // const HandleCheckChange = (checked:any, id:any) => {
  //   if (checked) {
  //     setCheckedItems([...CheckedItems, id]);
  //   }
  //   else {
  //     setCheckedItems(CheckedItems.filter((ele:any) => ele !== id));
  //   }
  // };

    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input 
              type="checkbox" 
              // checked={
              //   CheckedItems.length === CartItemsList.length ? true : false
              // }
              // onChange={(e) => HandleAllCheck(e.target.checked)}
              />
            <label>전체선택</label>
          </div>
          {!cartItems.length ? (
            <div id="item-list-text">
              장바구니에 아이템이 없습니다.
            </div>
          ) : (
              <>  
                {MatchingItems.map((item:any ) => {
                const quantity = cartItems.filter((ele:any) => ele.itemId === item.id)[0].quantity  
                return <li className="CartContainer" key={item.id}> 
                  <input 
                    className="Check" 
                    type="checkbox" 
                    // checked={CheckedItems.includes(item.id) ? true : false}
                    onChange={(e) => {
                      // HandleCheckChange(e.target.checked, item.id)
                    }}
                  />
                <img className="CartImg" src={item.img} alt=""/>
                <div className="Item">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
                <div className="Settiing">
                  {/* <button className="DelBtn" onClick={() => {RemoveCart(item.id)}}>삭제</button> */}
                  <input 
                  className="NumberSetting" 
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    // SettingQuantityData(Number(e.target.value), item.id)
                  }}
                  />
                </div>
              </li>
              })}
              </>
          )}
            {/* <OrderTotal total={total.price} totalQuantity={total.quantity} />                                */}
          </>
    )
}

export default CartMain;