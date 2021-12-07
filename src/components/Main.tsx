import React, { useState } from 'react';
import './Main.css';

const Main = ( Items: any ) => {
  console.log(Items.Items.Items)
    return (          
        <div className="MainBox">
          <div className="Box">
            {Items.Items.Items.map((ele:any) => (
          <div>{ele.name}</div>
        ))}
            <img className="ImgBox" src='' alt="" />
            <div className="ItemInfo"></div>
            <button className="ItemBtn">장바구니 추가</button>
          </div>                   
        </div>
    )
}
export default Main;