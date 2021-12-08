import React, { useState } from 'react';
import './Main.css';

const Main = ( Items: any ) => {
  console.log(Items.Items.Items)
  const data = Items.Items.Items
    return (          
        <div className="MainBox">          
            {data.map((ele:any) => (
            <div className="Box">  
              <img className="ImgBox" src='' alt="" />
              <div className="ItemInfo">{ele.name} {ele.price}원</div>
              <button className="ItemBtn">장바구니 추가</button>
            </div>
              
            ))}            
                           
        </div>
    )
}
export default Main;