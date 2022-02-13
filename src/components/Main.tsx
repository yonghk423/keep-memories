import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import './Main.scss';
import { initialState } from '../asset/data'
import { Link } from 'react-router-dom';
import InfoUpload from './InfoUpload';

export interface ItemReducer {
        ItemReducer : Array<object>
}
const Main = () => {
  const state:any = useSelector<ItemReducer>(state => state.ItemReducer);  
  console.log(state.items);
  const thumImg = state.items
  const [fullImg, setFullImg] = useState(initialState.items[0]);
  console.log(thumImg)
  
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
  console.log(thumImg)
  
    return (
        <div className='total'>  
          <div className="fullImgBox">
            <Link to={`/DetailPage/${idData}`}>
              <img className='fullImg' src={imgData} alt=""></img>
            </Link>
            <div className='title'>please click the picture</div>
          </div>          
          <div className='thumBox'>
            {thumImg.map((ele:any)=> (
                <img className='thumImg' 
                  key={ele.id} src={ele.img} alt="" onClick={() => onImgChange(ele)}>   
                </img>  
            ))}
          </div>
          <div className='infoBox'>
            <InfoUpload/>
          </div>
        </div>    
    )
}
export default Main;