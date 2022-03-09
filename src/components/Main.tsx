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
  console.log(fullImg.items)
//-------------------------------------------------------------------------------    
  useEffect(() => {
    axios.get('http://localhost:8080/initialState')
    .then(response => {
      setFullImg(response.data);
    })
  }, [])

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
  }

  const RemoveItemSetting = (itemId:number) => {
    console.log(itemId)
    dispatch(RemoveItem(itemId))
  }
//----------------------------------------------------------------------------------  
    return (
        <div className='total'>
          {fullImg.items &&
          <>
          <div className="fullImgBox">
            <Link to={`/DetailPage/${fullImg.items[0].id}`}>
              <img className='fullImg' src={fullImg.items[0].img} alt=""></img>
            </Link>
            <div className='title'>please click the picture</div>
          </div>          
          {/* <div className='thumBox'>
            {thumImg.map((ele:any)=> (
                <div key={ele.id}>
                  <img className='thumImg' 
                    src={ele.img} alt="" onClick={() => onImgChange(ele)}>   
                  </img>
                <button className='imgDelBtn' onClick={() => RemoveItemSetting(ele.id)}>삭제</button>
                </div>                
            ))}
          </div> */}
          {/* <div className='infoBox'>
            <InfoUpload/>
          </div> */}
          </>
          }      
        </div>    
    )
}
export default Main;