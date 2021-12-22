import React, { useState } from 'react';
import { RemoveCart, SetQuantity } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './CartMain.css';
import OrderTotal from './OrderTotal';

export interface ItemReducer {
        ItemReducer : object[]
}

const CartMain = () => {
  
  const state = useSelector<ItemReducer>(state=> state.ItemReducer);
  const dispatch = useDispatch();
  const {items, cartItems}:any = state;
  console.log({items, cartItems})
  const MatchingItems:object[] = items.filter((ele:any) => cartItems.map((ele:any) => ele.itemId).indexOf(ele.id) > -1)
  let data = cartItems.map((ele:any) => (ele.itemId))
  console.log(data);
  const [checkedItems, setCheckedItems] = useState(data);
  console.log(checkedItems);

  const RemoveCartSetting = (itemId:number) => {
    console.log(itemId)
    setCheckedItems(checkedItems.filter((ele:any) => ele !== itemId))
    dispatch(RemoveCart(itemId))
  } 
  
  const SetQuantitySetting = ( quantity: number, itemId: number) => {
    dispatch(SetQuantity(quantity, itemId))    
  }  

  const getTotal = () => {
    let cartIdArr = cartItems.map((ele:any) => ele.itemId)
    console.log(cartIdArr);
    let total = {
      price: 0,
      quantity: 0,
    }
    for (let i = 0; i < cartIdArr.length; i++) {
      if (checkedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = cartItems[i].quantity
        let price = items.filter((ele:any) => ele.id === cartItems[i].itemId)[0].price        
        total.price = total.price + quantity * price
        total.quantity = total.quantity + quantity        
      }
    }
    return total
  }
  const total = getTotal()

  const handleAllCheck = (checked:any) => {
    if(checked) {
      setCheckedItems(cartItems.map((ele:any)=> (ele.itemId)))
    }
    else {
      setCheckedItems([]);
    }
  }

  const handleCheckChange = (checked:any, id:any) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((ele:any) => ele !== id));
    }
  };

    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input 
              type="checkbox" 
              checked={
                checkedItems.length === cartItems.length ? true : false
              }
              onChange={(e) => handleAllCheck(e.target.checked)}
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
                    checked={checkedItems.includes(item.id) ? true : false}
                    onChange={(e) => {
                      handleCheckChange(e.target.checked, item.id)
                    }}
                  />
                <img className="CartImg" src={item.img} alt=""/>
                <div className="Item">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
                <div className="Settiing">
                  <button className="DelBtn" onClick={() => {RemoveCartSetting(item.id)}}>삭제</button>
                  <input 
                  className="NumberSetting" 
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    SetQuantitySetting(Number(e.target.value), item.id)
                  }}
                  />
                </div>
              </li>
              })}
              </>
          )}
            <OrderTotal total={total.price} totalQuantity={total.quantity} />                               
          </>
    )
}

export default CartMain;