import React, { useState } from 'react';
import './Main.css';

const Main = () => {

    return (
        <div className="MainBox">
          <div className="Box">
            <img className="ImgBox" src='' alt="" />
            <div className="ItemInfo">상품명 가격</div>
            <button className="ItemBtn">장바구니 추가</button>
          </div>
          <div className="Box">
            <img className="ImgBox" src="" alt="" />
            <div className="ItemInfo">상품명 가격</div>
            <button className="ItemBtn">장바구니 추가</button>
          </div>
          <div className="Box">
            <img className="ImgBox" src="" alt="" />
            <div className="ItemInfo">상품명 가격</div>
            <button className="ItemBtn">장바구니 추가</button>
          </div>
          <div className="Box">
            <img className="ImgBox" src="" alt="" />
            <div className="ItemInfo">상품명 가격</div>
            <button className="ItemBtn">장바구니 추가</button>
          </div>          
        </div>
    )
}
export default Main;