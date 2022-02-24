import React from 'react';
import { useBarcode } from '@createnextapp/react-barcode';


function Barcode() {  
    
  const { inputRef } = useBarcode({
    value: String(Math.floor((Math.random()*1000000000000))), //랜덤으로 변경
    options: {
      background: '#ffffff',
    }
  });

  return <img ref={inputRef} alt="" />;
};

export default Barcode;