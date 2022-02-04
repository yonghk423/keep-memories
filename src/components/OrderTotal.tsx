import './OrderTotal.scss'

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
          <div className='OrderTotal'>주문 합계</div>
          <div className='OrderQuantity'>총 아이템 개수: {Quantity}개</div>
          <hr></hr>
          <div className='OrderSummaryTotal'>합계: {Total}원</div>
      </div>
    )
}

export default OrderTotal;