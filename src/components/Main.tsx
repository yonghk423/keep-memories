import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Main.css';

export interface ItemReducer {
        ItemReducer : object[]
}

const Main = () => {
  const state = useSelector<ItemReducer>(state=> state.ItemReducer);
  const {items, cartItems}:any = state;
  console.log({items, cartItems})
  // const AddCart:any = Items.Items.AddCart
  // const data:object[] = Items.Items.Items
    return (  
    <>
    </>        
        // <div className="MainBox">          
        //     {data.map((item:any) => (
        //     <div className="Box" key={item.id}>  
        //       <img className="ImgBox" src={item.img} alt="" />
        //       <div className="ItemInfo">{item.name} {item.price}원</div>
        //       <button className="ItemBtn" onClick={() => AddCart(item.id)}>장바구니 추가</button>
        //     </div>              
        //     ))}                       
        // </div>
    )
}
export default Main;