import React, { useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { SetData } from '../actions';
// import { useParams, useNavigate } from 'react-router-dom';
import './ModalData.scss'

interface props { open: boolean; close: () => void; modalNumber : any }

export interface ItemReducer {
        ItemReducer : Array<object>
}

const ModalData = (props: props) => {
  // const idData = useParams()
  // const ItemId:number = Number(idData.id)
  // console.log(ItemId);
  const state:any = useSelector<ItemReducer>(state => state.ItemReducer);
  // const dispatch = useDispatch();
  let {items, cartItems}:any = state;
  console.log(items);
  //   const detailData = async () => {
  //   const response:any = await axios
  //   .get('https://everycoding.herokuapp.com')
  //   .catch((err) => {
  //     console.log("Err", err);
  //   });
  //   dispatch(SetData(response.data));    
  // }  

  // useEffect(() => {
  //   detailData();    
  // }, [])

    const {open, close, modalNumber} = props; 
    console.log(modalNumber) 
    const data = items.find((ele:any) => (ele.id === modalNumber))  
    console.log(data);
    return (
      <>
      {open &&
      <div className='modalBackground'>
        <div className='modalContent'>
            <button onClick={close}>&times;</button>
            {data && 
            <div>
              <div>{data.name}</div>
              <img className='modalImg' src={data.img} alt=""/>
              <div>{data.price}₩</div>
              <div>{data.text}</div>
            </div>}
        </div>       
      </div>
        }
    </>
    )
}

export default ModalData;