import React, { useState } from 'react';
import './OrderTotal.css'

const OrderTotal = ( Items:any ) => {
  console.log(Items);
  const ItemsList:any = Items.Items.Items;
  const CartItemsList:any = Items.Items.CartItems;
  let data = CartItemsList.map((ele:any) => (ele.ItemId))
  const [CheckedItems, setCheckedItems] = useState(data);

  const getTotal = () => {
    let cartIdArr = CartItemsList.map((ele:any) => ele.ItemId)
    console.log(cartIdArr);
    let total = {
      price: 0,
      quantity: 0,
    }
    for (let i = 0; i < cartIdArr.length; i++) {
      if (CheckedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = CartItemsList[i].quantity
        let price = ItemsList.filter((ele:any) => ele.id === CartItemsList[i].ItemId)[0].price        
        total.price = total.price + quantity * price
        total.quantity = total.quantity + quantity        
      }
    }
    return total
  }
  const total = getTotal()

    return (
      <div className="OrderTotalBox">
        <div className="SettingBox">
          <div>주문 합계</div>
          <div>총 아이템 개수: {total.quantity} 개</div>
          <div>합계: {total.price} 원</div>
        </div>
      </div>
    )
}

export default OrderTotal;