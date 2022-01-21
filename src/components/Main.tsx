import React from 'react';
import { AddCart } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Main.scss';

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

const Main = () => {
  const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);
  const dispatch = useDispatch();
  const {items, cartItems}:DataSetting = state;
  console.log({items, cartItems})
  
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
            <div className="MainBox">          
            {items.map((item) => (
            <div className="Box" key={item.id}>  
              <img className="ImgBox" src={item.img} alt="" />
              <div className="ItemInfo">{item.name} {item.price}원</div>
              <span className='Text'>{item.text}</span>
              <div className='BtnBox'>
              <button className="ItemBtn" onClick={() => AddCartSetting(item.id)}>장바구니 추가</button>
              </div>
            </div>              
            ))}                       
        </div>
    )
}
export default Main;