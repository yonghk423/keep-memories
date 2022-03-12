import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AddCart, notify, selectedItem, } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './DetailPage.scss';
import Todos from './Todos';
import Barcode from '../service/Barcode'

export interface SelectedReducer {
        SelectedReducer : Array<object>
}

export interface ItemReducer {
        ItemReducer : Array<object>
}

// export interface DataSetting {  
//   items: [{
//     price:number;
//     id:number;
//     img:string;
//     name:string;
//     text:string;
//     textBox: {
//         id: number;
//         name: string;
//         text: string;
//     }[];
//   }]
//   cartItems: [{
//     quantity:number;
//     itemId:number;
//   }]; 
// }

const DetailPage = () => {  
  const idData = useParams()
  console.log(idData)  
  const ItemId:number = Number(idData.id)
  console.log(ItemId);

  const state:any = useSelector<ItemReducer>(state => state.ItemReducer);
  console.log(state);
  const dispatch = useDispatch();
  let {items, cartItems}:any = state;
      
  const getDetail = async (ItemId:number) => {
    const response:any = await axios
      .get(`http://localhost:8080/initialState/items/${ItemId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(selectedItem(response.data))   
  };
  
  useEffect(() => {
    if(ItemId) (
      getDetail(ItemId)
    )   
  }, [ItemId])

  // interface Data {
  //   id: number;
  //   name: string;
  //   img: string;
  //   price: number;
  //   text: string;
  //   textBox: {
  //       id: number;
  //       name: string;
  //       text: string;
  //   }[];
  // }  
  // const data:Data|any = items.find((ele) => (ele.id === number))
  // console.log(data);
  

  const AddCartSetting = ( id:number, itemName:string ) => {    
    console.log(id);
    console.log(itemName);
    const find = cartItems.filter((ele:any):boolean => (ele.id === id))[0]
    if(!find) {
      // console.log(find);
      console.log('새로운 상품 추가')
      dispatch(AddCart(id))
      dispatch(notify(`${itemName}이(가) 추가 되었습니다.`))
    }
    else {
      console.log('기존 리스트와 일치하는 상품')
      dispatch(notify(`이미 추가된 상품입니다.`))
    }
  }

    return (      
      <div className='container'>               
        {items.map((ele:any)=> (
          <div key={ele.id}>          
          <div className='fullImgDetailBox'>                   
              <img className='fullImg' src={ele.img}  key={ele.id} alt=''/>
            <div className='barcode'>
              <Barcode/>
            </div>
          </div>
          <div className='infoBox'>
            <div className='name'>{ele.name}</div>
            <div className='price'>{ele.price}₩</div>
            <div className='text'>{ele.text}</div>
            <div className='BtnBox'>
              <button className="ItemBtn" onClick={() => AddCartSetting(ele.id, ele.name)}>ADD TO CART</button>
            </div>
          </div>       
          <div className='todos'>
            <div className='todosTitle'>Please leave your thoughts on the photo</div>
            <Todos todos={items}/>
          </div>
          </div>             
          ))}       
      </div>  
    )
}
export default DetailPage;