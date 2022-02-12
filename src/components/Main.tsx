import React, { useState } from 'react';
import './Main.scss';
import { initialState } from '../asset/data'
import { Link } from 'react-router-dom';
import InfoUpload from './InfoUpload';
console.log(initialState);

const Main = () => {
  const [fullImg, setFullImg] = useState(initialState.items[0]);
  const [thumImg] = useState(initialState.items);
  
  const imgData:string = fullImg.img  
  const idData:number = fullImg.id
 
  const onImgChange = (ele: {
    id: number;
    name: string;
    img: string;
    price: number;
    text: string;
    textBox: {
        id: number;
        name: string;
        text: string;
    }[];
}): void => {
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
            {thumImg.map((ele)=> (                                     
              <img className='thumImg' 
                key={ele.id} src={ele.img} alt="" onClick={() => onImgChange(ele)}>   
              </img>              
            ))}
          </div>
          <InfoUpload/>
        </div>    
    )
}
export default Main;