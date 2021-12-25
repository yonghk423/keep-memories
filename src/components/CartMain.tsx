import React, { useState } from 'react';
import { RemoveCart, SetQuantity } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './CartMain.css';
import OrderTotal from './OrderTotal';

export interface ItemReducer {
  ItemReducer : Array<object>
}

export interface Property {
  qunatity:number;
}

export interface DataSetting {
    items: [{
    price:number;
    id:number;    
  }]
  cartItems: [{
    quantity:number;
    itemId:number;
  }]; //object 형식에 quantity itemdId price 속성이 없다는 오류 원인
}

export interface CheckedItems {
  CheckedItems:Array<number>
}

export interface Item {
  id: number
}

const CartMain = () => {
  
  const state:any = useSelector<ItemReducer>(state=> state.ItemReducer)
  const dispatch = useDispatch();
  const {items, cartItems}:DataSetting = state;
  console.log({items, cartItems})
  const MatchingItems:Array<object> = items.filter((ele) => cartItems.map((ele) => ele.itemId).indexOf(ele.id) > -1)
  console.log(MatchingItems);
  let data = cartItems.map((ele) => (ele.itemId))
  console.log(data);
  const [checkedItems, setCheckedItems]= useState<CheckedItems['CheckedItems']>(data);
  console.log(checkedItems);

  const RemoveCartSetting = (itemId:number) => {
    console.log(itemId)
    setCheckedItems(checkedItems.filter((ele) => ele !== itemId))
    dispatch(RemoveCart(itemId))
  } 
  
  const SetQuantitySetting = ( quantity: number, itemId: number) => {
    dispatch(SetQuantity(quantity, itemId))    
  }  

  const getTotal = () => {
    let cartIdArr = cartItems.map((ele) => ele.itemId)
    console.log(cartIdArr);
    let total = {
      price: 0,
      quantity: 0,
    }
    for (let i = 0; i < cartIdArr.length; i++) {
      if (checkedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = cartItems[i].quantity
        let price = items.filter((ele) => ele.id === cartItems[i].itemId)[0].price        
        total.price = total.price + quantity * price
        total.quantity = total.quantity + quantity        
      }
    }
    return total
  }
  const total = getTotal()

  const handleAllCheck = (checked:any) => {
    if(checked) {
      setCheckedItems(cartItems.map((ele)=> (ele.itemId)))
    }
    else {
      setCheckedItems([]);
    }
  }

  const handleCheckChange = (checked:any, id:number) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((ele) => ele !== id));
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
                {MatchingItems.map((item:any) => {
                const quantity = cartItems.filter((ele) => ele.itemId === item.id)[0].quantity  
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