import React, { useState } from 'react';
// import { AddCart } from '../actions';
// import { useSelector, useDispatch } from 'react-redux';
import './Main.scss';
import { initialState } from '../asset/data'
import { Link } from 'react-router-dom';

export interface DataList {
  fullImg: any;
  setFullImg: any;
  thumImg:any;
  setThumImg:any;
}

console.log(initialState.items[0])

// export interface ItemReducer {
//         ItemReducer : Array<object>
// }

// export interface DataSetting {  
//   items: [{
//     price:number;
//     id:number;
//     img:string;
//     name:string;
//     text:string;
//   }]
//   cartItems: [{
//     quantity:number;
//     itemId:number;
//   }]; 
// }

const Main = () => {
  const [fullImg, setFullImg] = useState<DataList['fullImg']>(initialState.items[0]);
  const [thumImg] = useState<DataList['thumImg']>(initialState.items)

  console.log(fullImg);
  console.log(fullImg.id);
  const imgData = fullImg.img
  const idData = fullImg.id
  
  // const state:any = useSelector<ItemReducer>(state=> state.ItemReducer);
  // const dispatch = useDispatch();
  // const {items, cartItems}:DataSetting = state;
  // console.log({items, cartItems})
  
  // const AddCartSetting = ( itemId:number ) => {    
  //   const find = cartItems.filter((ele):boolean => (ele.itemId === itemId))[0]
  //   if(!find) {
  //     console.log(find);
  //     console.log('새로운 상품 추가')
  //     dispatch(AddCart(itemId))
  //   }
  //   else {
  //     console.log('기존 리스트와 일치하는 상품')
  //   }
  // }
  const onImgChange = (ele:any) => {
    console.log(ele);
    setFullImg(ele);
  }

    return (
        <div className='total'>  
          <div className="fullImgBox">
            <Link to={`/DetailPage/${idData}`}>
              <img className='fullImg' src={imgData} alt=""></img>
            </Link>
            <div className='title'>please click the picture</div>
          </div>          
          <div>
            {thumImg.map((ele:any)=> (                                     
              <img className='thumImg' 
                key={ele.id} src={ele.img} alt="" onClick={() => onImgChange(ele)}>   
              </img>              
            ))}
          </div>
        </div>    
    )
}
export default Main;