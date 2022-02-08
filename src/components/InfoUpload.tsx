import React, { useState } from 'react';

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
   
  return (
        <div>
            <form className='submitInfo'>
                <input name='name' value={name}/>
                <input name='price' value={price}/>                                
                <input name='text' value={text}/>              
            </form>
        </div>
    ) 
    
}

export default InfoUpload;