import React, { useState, useEffect } from 'react';
import { RootState } from '../reducers/index'
import axios from 'axios';
import { RemoveCart, SetData } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './CartMain.scss';
import ModalData from './ModalData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";


export interface ItemReducer {
  ItemReducer : number
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
  const state:any = useSelector((state:RootState)=> state.ItemReducer)
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
  
  const RemoveCartSetting = (id:number) => {
    console.log(id)
    dispatch(RemoveCart(id))
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  } 

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
          </div>
          {cartItems &&           
              <>  
                {MatchingItems.map((item:any) => {
                return <div className="CartContainer" key={item.id}>                  
                <div onClick={()=> {onClickModal(item.id)}}>  
                  <img className="CartImg" onClick={openReq} src={item.img} alt=""/>
                </div>
                <div className="Item">
                  <div className='itemName'>{item.name}</div>
                  <div className='itemPrice'>{item.price}₩</div>
                </div>                
                <div className="Setting">
                  <button className="DelBtn" onClick={() => {RemoveCartSetting(item.id)}}>
                    <FontAwesomeIcon icon={faEraser} size="2x" />
                  </button>                  
                </div>                
              </div>
              })}
              <ModalData open={showReq} close={closeReq} modalNumber={modalNumber}/>
              </>
          }                        
          </>
    )
}

export default React.memo(CartMain);