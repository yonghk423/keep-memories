import React, { useState } from 'react';
import './Main.css';

const Main = ( Items: any ) => {
  console.log(Items);
  console.log(Items.Items.AddCart); 
  const AddCart:any = Items.Items.AddCart
  const data:object[] = Items.Items.Items
    return (          
        <div className="MainBox">          
            {data.map((item:any) => (
            <div className="Box" key={item.id}>  
              <img className="ImgBox" src={item.img} alt="" />
              <div className="ItemInfo">{item.name} {item.price}원</div>
              <button className="ItemBtn" onClick={(e) => AddCart(e, item.id)}>장바구니 추가</button>
            </div>              
            ))}                       
        </div>
    )
}
export default Main;