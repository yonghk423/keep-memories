import React, { useState, useEffect } from 'react';
import { RootState } from '../reducers/index';
import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { SetData } from '../actions/index';
import { RemoveItem } from '../actions/index'
import { useNavigate } from 'react-router-dom';
import './Main.scss';

export interface ImgData {
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
}

const Main = () => {
  const navigate = useNavigate();  
  const state = useSelector((state: RootState) => state.ItemReducer);
  const dispatch = useDispatch();  
  const thumImg = state.items
  const [fullImg, setFullImg] = useState<ImgData | any>([]);
//------------------------------------------------------------------------------- 
  const mainImg = async () => {
  try {
    const response  = await axios.get('https://everycoding.herokuapp.com')
    const mainImg = await response.data.items[15]    
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
    .get('https://everycoding.herokuapp.com')
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(SetData(response.data));     
  }
  
  useEffect(() => {
    getData();
  }, [fullImg])

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
    setFullImg(ele);    
  }

  const RemoveItemSetting = (itemId:number):void => {
    console.log(itemId)
    dispatch(RemoveItem(itemId))
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }
  const onClick = ():void => {
      navigate(`/DetailPage/${fullImg.id}`)
      window.location.reload()
    }   

    return (
        <div className='total'>          
          {fullImg &&
          <div className="fullImgBox">
            <div onClick={onClick}>
               <img className='fullImg' src={fullImg.img} alt=""></img>
            </div>   
            <div className='title'>please click the picture</div>            
          </div>          
          }                    
          <div className='thumBox'>
            {thumImg.map((ele:any)=> (
                <div className='thumImgBox' key={ele.id}>
                  <img className='thumImg'  
                    src={ele.img} alt="" onClick={() => onImgChange(ele)}>   
                  </img>
                <button className='imgDelBtn' onClick={() => RemoveItemSetting(ele.id)}>&times;</button>
                </div>                
            ))}
          </div>         
        </div>    
    )
}
export default React.memo(Main);