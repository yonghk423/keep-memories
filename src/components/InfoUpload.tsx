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

  const {id, name, price, textBox} = infoData;
  console.log({id, name, price, textBox})

  // const {name, img, price, text, textBox} = infoData;
  
  return (
        <div>
            <form>
                test
            </form>
        </div>
    ) 
    
}

export default InfoUpload;