import React from 'react';
import { useParams } from 'react-router-dom';
import { AddCart, notify } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './DetailPage.scss';
import Todos from './Todos';

export interface ItemReducer {
        ItemReducer : Array<object>
}

export interface DataSetting {  
  items: [{
    price:number;
    id:number;
    img:string;
    name:string;
    text:string;
    textBox: {
        id: number;
        name: string;
        text: string;
    }[];
  }]
  cartItems: [{
    quantity:number;
    itemId:number;
  }]; 
}

const DetailPage = () => {
  const idData = useParams()
  console.log(idData)  
  const number:number = Number(idData.id)
  console.log(number);

  const state:any = useSelector<ItemReducer>(state => state.ItemReducer);  
  const dispatch = useDispatch();
  const {items, cartItems}:DataSetting = state;
  console.log(items) 
  console.log(cartItems) 
  
  interface Data {
    id: number;
    name: string;
    img: string;
    price: number;
    text: string;
    textBox: {
        id: number;
        name: string;
        text: string;
    }[];
  }  
  

  const data:Data|any = items.find((ele) => (ele.id === number))
  // console.log(data);
  
  const AddCartSetting = ( itemId:number, itemName:string ) => {    
    console.log(itemId);
    console.log(itemName);
    const find = cartItems.filter((ele):boolean => (ele.itemId === itemId))[0]
    if(!find) {
      // console.log(find);
      console.log('새로운 상품 추가')
      dispatch(AddCart(itemId))
      dispatch(notify(`${itemName}이(가) 추가 되었습니다.`))
    }
    else {
      console.log('기존 리스트와 일치하는 상품')
      dispatch(notify(`이미 추가된 상품입니다.`))
    }
  }

    return (
      <>
      <div className='container'>
        <div className='fullImgDetailBox'>
          <img className='fullImg' src={data.img}  key={data.id} alt=''/>                   
        </div>
        <div className='infoBox'>
            <div className='name'>{data.name}</div>
            <div className='price'>{data.price}₩</div>
            <div className='text'>{data.text}</div>
            <div className='BtnBox'>
              <button className="ItemBtn" onClick={() => AddCartSetting(data.id, data.name)}>ADD TO CART</button>
            </div>
        </div> 
        <div className='todos'>
          <div className='todosTitle'>Please leave your thoughts on the photo</div>
          <Todos todos={data}/>
        </div>             
      </div>      
      </>
    )
}
export default DetailPage;