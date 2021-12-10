import React from 'react';
import Main from '../components/Main';

const landingPage = ( Items:any, AddCart:any ) => {   
    return (
        <>          
          <Main Items={Items} AddCart={AddCart} />
        </>
    )
}

export default landingPage;