import React from 'react';
import Main from '../components/Main';

const landingPage = ( Items:any ) => {
    console.log(Items)
    console.log(Items.Items);
    return (
        <>          
          <Main Items={Items} />
        </>
    )
}

export default landingPage;