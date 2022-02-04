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
          <div className='OrderTotal'>order total</div>
          <div className='OrderQuantity'>Total number of products: {Quantity}</div>
          <hr></hr>
          <div className='OrderSummaryTotal'>Sum: {Total}₩</div>
      </div>
    )
}

export default OrderTotal;