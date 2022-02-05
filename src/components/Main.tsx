import React, { useState } from 'react';
import './Main.scss';
import { initialState } from '../asset/data'
import { Link } from 'react-router-dom';

export interface DataList {
  fullImg: any;
  setFullImg: any;
  thumImg:any;
  setThumImg:any;
}

const Main = () => {
  const [fullImg, setFullImg] = useState<DataList['fullImg']>(initialState.items[0]);
  const [thumImg] = useState<DataList['thumImg']>(initialState.items)  
  const imgData = fullImg.img  
  const idData = (fullImg.id)
  
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