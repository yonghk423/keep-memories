import React from 'react';
import Main from '../components/Main';

const landingPage = ( Items:any ) => {
console.log(Items); 
console.log(Items.AddCart); 
    return (
        <>          
          <Main Items={Items} />
        </>
    )
}

export default landingPage;