import React, { useState } from 'react';
import './Main.css';

const Main = ( Items: any ) => {  
  const data:object[] = Items.Items.Items
    return (          
        <div className="MainBox">          
            {data.map((ele:any) => (
            <div className="Box" key={ele.id}>  
              <img className="ImgBox" src={ele.img} alt="" />
              <div className="ItemInfo">{ele.name} {ele.price}원</div>
              <button className="ItemBtn">장바구니 추가</button>
            </div>              
            ))}                       
        </div>
    )
}
export default Main;