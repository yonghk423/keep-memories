import React from 'react';
import { useParams } from 'react-router-dom';
import { AddCart } from '../actions';
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
  }]
  cartItems: [{
    quantity:number;
    itemId:number;
  }]; 
}

const DetailPage = () => {
  const idData:any = useParams()
  // console.log(idData.id)  
  const number = Number(idData.id)

  const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);  
  const dispatch = useDispatch();
  const {items, cartItems}:DataSetting = state;  
  
  const data:any = items.find((ele):any => (ele.id === number))
  // console.log(data);
  // console.log(data.img)
  
  const AddCartSetting = ( itemId:number ) => {    
    const find = cartItems.filter((ele):boolean => (ele.itemId === itemId))[0]
    if(!find) {
      // console.log(find);
      console.log('새로운 상품 추가')
      dispatch(AddCart(itemId))
    }
    else {
      console.log('기존 리스트와 일치하는 상품')
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
            <div className='price'>{data.price}</div>
            <div className='text'>{data.text}</div>
            <div className='BtnBox'>
              <button className="ItemBtn" onClick={() => AddCartSetting(data.id)}>장바구니 추가</button>
            </div>
        </div> 
        <div className='todos'>
          <div>Write your thoughts on the photo</div>
          <Todos todos={data}/>
      </div>             
      </div>      
      </>
    )
}
export default DetailPage;