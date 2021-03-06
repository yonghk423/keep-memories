import React, { useEffect } from 'react';
import { RootState } from '../reducers/index';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AddCart, notify, selectedItem, SetData } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './DetailPage.scss';
import Todos from './Todos'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export interface SelectedReducer {
        SelectedReducer : Array<object>
}

export interface ItemReducer {
        ItemReducer : Array<object>
}

const DetailPage = () => {
  const idData = useParams()
  const ItemId:number = Number(idData.id)
  console.log(ItemId);
  const detailData = async () => {
    const response:any = await axios
    .get('https://everycoding.herokuapp.com')
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(SetData(response.data));    
  }  

  useEffect(() => {
    detailData();    
  }, [])

  

  const state:any = useSelector((state:RootState) => state.SelectedReducer);
  const textState:any = useSelector((state:RootState) => state.ItemReducer);
  console.log(textState);
  console.log(state);
  const dispatch = useDispatch();
  let {items, cartItems}:any = state;
  let textBox = textState.items
  console.log(textBox);

  const getDetail = async (ItemId:number) => {
    const response:any = await axios
      .get(`https://everycoding.herokuapp.com/items/${ItemId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(selectedItem(response.data))        
  };
  
  useEffect(() => {
    if(ItemId) (
      getDetail(ItemId)
    )   
  }, [ItemId])

  interface Data {
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
  console.log(items);
  console.log(ItemId);
  const data:Data|any = items.find((ele:any) => (ele.id === ItemId))
  console.log(data);
  

  const AddCartSetting = ( id:number, itemName:string ) => {    
    console.log(id);
    console.log(itemName);
    const find = cartItems.filter((ele:any):boolean => (ele.id === id))[0]
    if(!find) {
      console.log('????????? ?????? ??????')
      dispatch(AddCart(id))
      dispatch(notify(`${itemName}???(???) ?????? ???????????????.`))      
    }
    else {
      console.log('?????? ???????????? ???????????? ??????')
      dispatch(notify(`?????? ????????? ???????????????.`))
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }
  console.log(items)
    return (      
      <div className='container'>
        {!items.length ? (<div>loading...</div>) :
        <>               
        {items.map((ele:any)=> (
          <div key={ele.id} className="detailBox">   
            <img className='fullImg' src={ele.img}  key={ele.id} alt=''/>           
            <div className='infoBox'>
              <div className='name'>{ele.name}</div>
              <div className='price'>{ele.price}???</div>
              <div className='text'>{ele.text}</div>
              <button className="ItemBtn" onClick={() => AddCartSetting(ele.id, ele.name)}>
                <FontAwesomeIcon icon={faFolderPlus} size="4x" />
              </button>
            </div>
          </div>
         ))}         
          <div className='todos'>
            <div className='todosTitle'>Please leave your thoughts on the photo</div> 
            <Todos todos={data}/>
          </div> 
        </>
        }    
      </div>  
    )
}
export default React.memo(DetailPage);