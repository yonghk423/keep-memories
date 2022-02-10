import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/index'
import { dbService } from '../service/Firebase';

const InfoUpload = () => {
  const dispatch = useDispatch()
  const [infoData, setInfoData] = useState({
    name:'',
    price: '',
    text:'',
    textBox:[{
      name: '',
      text: '',
    }]    
  });
  const {name, price, text, textBox} = infoData;
  console.log({name, price, text, textBox})
   
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {    
    const {name, value} = e.target;
    console.log({name, value});    
    setInfoData({
      ...infoData,
      [name]: value,
      [price]: value,
      [text]: value,
      textBox:[{
      name: '',
      text: '',
    }]    
    })
  }

  const onFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { files }:any  = e.target;
    const theFIle = files[0];
    console.log(theFIle);
  }

  const onInfo = (name:string, price:string, text:string, textBox:Array<object>) => dispatch(addInfo(name, price, text, textBox))
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();      
    onInfo(name, price, text, textBox);    
    console.log(name, price, text, textBox)    
    setInfoData({
    name:'',
    price: '',
    text:'',
    textBox:[{
      name: '',
      text: '',
    }]    
    });
  }
  
  

  return (
        <div>
            <form className='submitInfo' onSubmit={onSubmit}>
              <input type="file" accept="image/*" onChange={onFileChange}/>
              <input name='name' value={name} onChange={onChange}/>
              <input name='price' value={price} onChange={onChange}/>                                
              <input name='text' value={text} onChange={onChange}/>
              <button type='submit'>등록</button>              
            </form>
        </div>
    ) 
    
}

export default InfoUpload;