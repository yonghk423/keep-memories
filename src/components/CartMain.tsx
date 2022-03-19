import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RemoveCart, SetQuantity, SetData } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartMain.scss';
import ModalData from './ModalData';
// import OrderTotal from './OrderTotal';

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
    id:number;
  }]; //object 형식에 quantity itemdId price 속성이 없다는 오류 원인
}

export interface CheckedItems {
  CheckedItems:Array<number>
}

export interface Item {
  id: number
}

const CartMain = (todos:any) => {  
    

  const state:any = useSelector<ItemReducer>(state=> state.ItemReducer)
  const dispatch = useDispatch();
  const {items, cartItems}:DataSetting = state;
  const [showReq, setShowReq] = useState<boolean>(false);
  const [modalNumber, setModalNumber] = useState(0)
  
  const cartData = async () => {
    const response:any = await axios
    .get('https://everycoding.herokuapp.com')
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(SetData(response.data));
  }

  useEffect(() => {
    cartData();
  }, [])
  

  const MatchingItems:Array<object> = items.filter((ele) => cartItems.map((ele) => ele.id).indexOf(ele.id) > -1)
  console.log(MatchingItems);
  
  let data = cartItems.map((ele) => (ele.id))
  console.log(data);
  
  const [checkedItems, setCheckedItems]= useState(data);
  console.log(checkedItems);

  const RemoveCartSetting = (id:number) => {
    console.log(id)
    setCheckedItems(checkedItems.filter((ele) => ele !== id))
    dispatch(RemoveCart(id))
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  } 
  
  // const SetQuantitySetting = ( quantity: number, itemId: number) => {
  //   dispatch(SetQuantity(quantity, itemId))    
  // }  

  // const getTotal = () => {
  //   let cartIdArr = cartItems.map((ele) => ele.id)
  //   console.log(cartIdArr);
  //   let total = {
  //     price: 0,
  //     quantity: 0,
  //   }
  //   for (let i = 0; i < cartIdArr.length; i++) {
  //     if (checkedItems.indexOf(cartIdArr[i]) > -1) {
  //       let quantity = cartItems[i].quantity
  //       let price = items.filter((ele) => ele.id === cartItems[i].id)[0].price        
  //       total.price = total.price + quantity * price
  //       total.quantity = total.quantity + quantity        
  //     }
  //   }
  //   return total
  // }
  // const total = getTotal()

  const handleAllCheck = (checked:boolean) => {
    console.log(checked)
    if(checked) {
      setCheckedItems(cartItems.map((ele)=> (ele.id)))
    }
    else {
      setCheckedItems([]);
    }
  }

  const handleCheckChange = (checked:boolean, id:number) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((ele) => ele !== id));
    }
  };

  const openReq = () => {
      setShowReq(!showReq);
  }

  const closeReq = () => {
      setShowReq(!showReq);
  }
  
  const onClickModal = (id:number) => {
    console.log(id)
    setModalNumber(id)
    
  }
    return (
          <> 
          <div className="TotalCheck">
            <input className='TotalCheckBtn'
              type="checkbox" 
              checked={
                checkedItems.length === cartItems.length ? true : false
              }
              onChange={(e) => handleAllCheck(e.target.checked)}
              />
            <label className='TotalCheckText'>Select All</label>
          </div>
          {!cartItems.length ? (
          <div className='TotalCheckSub'>  
            <div className="item-list-text">
              <div className='noItemText'>There are no items in your cart</div>
            </div>
          </div>  
          ) : (
              <>  
                {MatchingItems.map((item:any) => {
                // const quantity = cartItems.filter((ele) => ele.id === item.id)[0].quantity  
                return <li className="CartContainer" key={item.id}> 
                  <input 
                    className="Check" 
                    type="checkbox" 
                    checked={checkedItems.includes(item.id) ? true : false}
                    onChange={(e) => {
                      handleCheckChange(e.target.checked, item.id)
                    }}
                  />
                <div onClick={()=> {onClickModal(item.id)}}>  
                  <img className="CartImg" onClick={openReq} src={item.img} alt=""/>
                </div>
                <div className="Item">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>                
                <div className="Settiing">
                  <button className="DelBtn" onClick={() => {RemoveCartSetting(item.id)}}>삭제</button>
                  {/* <input 
                  className="NumberSetting" 
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => {
                    SetQuantitySetting(Number(e.target.value), item.id)
                  }}
                  /> */}
                </div>                
              </li>
              })}
              <ModalData open={showReq} close={closeReq} modalNumber={modalNumber}/>
              {/* <OrderTotal total={total.price} totalQuantity={total.quantity} /> */}
              </>
          )}
          </>
    )
}

export default CartMain;