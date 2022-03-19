import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetData } from '../actions';
import './ModalData.scss'
// import Todos from './Todos'

interface props { open: boolean; close: () => void; modalNumber : any }

export interface ItemReducer {
        ItemReducer : Array<object>
}

const ModalData = (props: props) => {  
  const state:any = useSelector<ItemReducer>(state => state.ItemReducer);
  let { items }:any = state;
  console.log(items);
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
            {/* <Todos todos={data}/> */}
        </div>       
      </div>
        }
    </>
    )
}

export default ModalData;