import React, { useDebugValue, useState } from 'react';

const InfoUpload = () => {
  const [infoData, setInfoData] = useState({
    id: '',
    name:'',
    price: '',
    text:'',
    textBox:[{
      id: '',
      name: '',
      text: '',
    }]    
  });

  const {id, name, price, text, textBox} = infoData;
  console.log({id, name, price, textBox})
   
  const onChange = (e:any) => {
    const {name, price, text} = e.target;
    setInfoData({
      ...infoData,
      [name]: name,
      [price]: price,
      [text]: text,
    })
  }

  return (
        <div>
            <form className='submitInfo'>
                <input name='name' value={name} onChange={onChange}/>
                <input name='price' value={price}/>                                
                <input name='text' value={text}/>              
            </form>
        </div>
    ) 
    
}

export default InfoUpload;