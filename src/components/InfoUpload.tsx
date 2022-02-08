import React, {useState } from 'react';
import { useDispatch } from 'react-redux';

const InfoUpload = () => {
  const dispatch = useDispatch()
  const [infoData, setInfoData] = useState({
    name:'',
    price: '',
    text:'',
    textBox:[{
      id: '',
      name: '',
      text: '',
    }]    
  });

  const {name, price, text, textBox} = infoData;
  console.log({name, price, textBox})
   
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    
    const {name, value} = e.target;
    console.log({name, value});
    setInfoData({
      ...infoData,
      [name]: value,
      [price]: value,
      [text]: value,
    })
  }

  const onInfo = (name:string, price:string, text:string) => dispatch(())

  const infoSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInfo(name, price, text);
    setInfoData({
      name:'',
    price: '',
    text:'',
    textBox:[{
      id: '',
      name: '',
      text: '',
    }]    
    });
  }
  
  

  return (
        <div>
            <form className='submitInfo' onSubmit={infoSubmit}>
                <input name='name' value={name} onChange={onChange}/>
                <input name='price' value={price} onChange={onChange}/>                                
                <input name='text' value={text} onChange={onChange}/>
                <button type='submit'>등록</button>              
            </form>
        </div>
    ) 
    
}

export default InfoUpload;