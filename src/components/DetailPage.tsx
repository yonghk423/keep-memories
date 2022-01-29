import React from 'react';
import { useParams } from 'react-router-dom';
import { AddCart } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

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
  console.log(idData.id)  
  const number = Number(idData.id)

  const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);  
  const dispatch = useDispatch();
  const {items, cartItems}:DataSetting = state;  
  
  const data:any = items.find((ele):any => (ele.id === number))
  console.log(data);
  console.log(data.img)
  
  const AddCartSetting = ( itemId:number ) => {    
    const find = cartItems.filter((ele):boolean => (ele.itemId === itemId))[0]
    if(!find) {
      console.log(find);
      console.log('새로운 상품 추가')
      dispatch(AddCart(itemId))
    }
    else {
      console.log('기존 리스트와 일치하는 상품')
    }
  }

    return (
        <>
          <img src={data.img} alt=''/>
        </>
    )
}
export default DetailPage;