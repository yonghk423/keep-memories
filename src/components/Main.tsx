import React, { useState } from 'react';
import { AddCart } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Main.scss';
import { initialState } from '../asset/data'

export interface DataList {
  fullImg: any;
  setFullImg: any;
  thumImg:any;
  setThumImg:any;
}

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
  const [fullImg, setFullImg] = useState<DataList['fullImg']>(initialState.items[0].img);
  const [thumImg, setThumImg] = useState<DataList['thumImg']>(initialState.items)
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
  const onImgChange = (eleImg:any) => {
   setFullImg(eleImg);
  }

    return (
        <div className='total'>  
          <div className="fullImgBox">
            <img src={fullImg} alt=""></img>
          </div>
          <div className='thumImgBox'>
            {thumImg.map((ele:any)=> (
              <img className='thumImg' src={ele.img} alt="" onClick={() => onImgChange(ele.img)}></img>
            ))}
          </div>
        </div>    
    )
}
export default Main;