import React from 'react';
import './CartMain.css';

const CartMain = () => {
    return (
          <> 
          <div>장바구니</div>
          <div className="TotalCheck">
            <input type="checkbox" id="scales" name="" checked/>
            <label>전체선택</label>
          </div>
          <li className="CartContainer">
            <input className="Check" type="checkbox" id="scales" name="" checked/>
            <img className="CartImg" src="" alt=""/>
            <div className="Item">
              <div>아이폰</div>
              <div>1000원</div>
            </div>
            <div className="Settiing">
              <button className="DelBtn">삭제</button>
              <input className="NumberSetting" type="number"/>
            </div>  
          {/* <div className="CartBox">
            <input type="checkbox" id="scales" name="" checked/>
            <img className="CartImg" src="" alt=""/>
            <div className="Item">
              <div>아이폰</div>
              <div>1000원</div>
            </div>
            <button>삭제</button>
            <input type="number"/>
          </div>
          <div className="CartBox">
            <input type="checkbox" id="scales" name="" checked/>
            <img className="CartImg" src="" alt=""/>
            <div className="Item">
              <div>아이폰</div>
              <div>1000원</div>
            </div>
            <button>삭제</button>
            <input type="number"/>
          </div> */}
          </li>
          </>
    )
}

export default CartMain;