import './OrderTotal.css'

export interface Total {
  total : number;
  totalQuantity : number;
}

const OrderTotal = ( total:Total) => {  
  console.log(total);
  const Total:number = total.total;
  const Quantity:number = total.totalQuantity;
  
    return (
      <div className="OrderTotalBox">
        {/* <div className="SettingBox"> */}
          <div>주문 합계</div>
          <div>총 아이템 개수: {Quantity}개</div>
          <div>합계: {Total}원</div>
        {/* </div> */}
      </div>
    )
}

export default OrderTotal;