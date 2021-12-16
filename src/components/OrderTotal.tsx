import React, { useState } from 'react';
import './OrderTotal.css'

const OrderTotal = ( total:any ) => {  
  const Total:number = total.total;
  const Quantity:number = total.totalQuantity;
  
    return (
      <div className="OrderTotalBox">
        <div className="SettingBox">
          <div>주문 합계</div>
          <div>총 아이템 개수: {Total}개</div>
          <div>합계: {Quantity}원</div>
        </div>
      </div>
    )
}

export default OrderTotal;