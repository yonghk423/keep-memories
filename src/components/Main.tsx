import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SetData } from '../actions/index';
import { useSelector, useDispatch} from 'react-redux';
import { RemoveItem } from '../actions/index'
import './Main.scss';
// import { initialState } from '../asset/data'
import { Link } from 'react-router-dom';
import InfoUpload from './InfoUpload';

export interface ItemReducer {
        ItemReducer : Array<object>
}
const Main = () => {
  const state:any = useSelector<ItemReducer>(state => state.ItemReducer);
  console.log(state);
  const dispatch = useDispatch();  
  console.log(state.items);
  const thumImg = state.items
  console.log(thumImg);
  const [fullImg, setFullImg]:any = useState([]);
  console.log(fullImg);  
//-------------------------------------------------------------------------------    
  const mainImg = async () => {
  try {
    const response  = await axios.get('http://localhost:8080/initialState')
    const mainImg = await response.data.items[2]
    console.log(mainImg)
    setFullImg(mainImg)
  } catch(err) {
    console.log("Error >>", err);
  }
};

useEffect(() => {
  mainImg();
}, []);

  const getData = async () => {
    const response:any = await axios
    .get('http://localhost:8080/initialState')
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(SetData(response.data));
  }

  useEffect(() => {
    getData();
  }, [])
//------------------------------------------------------------------------------   
  const imgData:string = fullImg.img  
  console.log(imgData);
  const idData:number = fullImg.id
  console.log(idData);
    
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

  const RemoveItemSetting = (itemId:number) => {
    console.log(itemId)
    dispatch(RemoveItem(itemId))
  }
//----------------------------------------------------------------------------------  
    return (
        <div className='total'>
          {/* {fullImg &&
          <div className="fullImgBox">
            
              <img className='fullImg' src={imgData} alt=""></img>
            <div className='title'>please click the picture</div>
          </div>          
          }           */}
          <div className='thumBox'>
            {thumImg.map((ele:any)=> (
                <div key={ele.id}>
                <Link to={`/DetailPage/${idData}`}> 
                  <img className='thumImg' 
                    src={ele.img} alt="" onClick={() => onImgChange(ele)}>   
                  </img>
                </Link>   
                <button className='imgDelBtn' onClick={() => RemoveItemSetting(ele.id)}>삭제</button>
                </div>                
            ))}
          </div>
          <div className='infoBox'>
            <InfoUpload/>
          </div>
        </div>    
    )
}
export default Main;