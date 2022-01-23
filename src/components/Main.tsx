import React from 'react';
import { AddCart } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Main.scss';
import { initialState } from '../asset/data'
console.log(initialState)

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
  console.log(state);
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

  const SelectedImg = (itemId: number) => {
    //사진을 눌렀을 때 
    console.log(itemId)
  }

    return (
        <div className='total'>  
          <div className="mainBox">
            <img className="bigImg" src={items[0].img} alt=""/>          
            {items.map((item) => (
            <div className='thumImg' key={item.id}>            
              <img src={item.img} alt=""
              onClick={() => SelectedImg(item.id)}
              ></img>                
            </div>          
            ))}                       
          </div>
        </div>    
    )
}
export default Main;