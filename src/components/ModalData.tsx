import { useSelector } from 'react-redux';
import { RootState } from '../reducers/index';
import './ModalData.scss'
import ModalTodos from './ModalTodos';

interface props { open: boolean; close: () => void; modalNumber : number }

const ModalData = (props: props) => {  
  const state = useSelector((state: RootState) => state.ItemReducer);
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
            <button className='modalBtn' onClick={close}>&times;</button>
            {data && 
            <div className='modalData'>
              <div className='modalName'>{data.name}</div>
              <img className='modalImg' src={data.img} alt=""/>
              <div className='modalPrice'>{data.price}₩</div>
              <div className='modalText'>{data.text}</div>
            </div>}
            <ModalTodos todos={data}/>
        </div>       
      </div>
        }
    </>
    )
}

export default ModalData;