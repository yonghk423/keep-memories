import React from 'react';
import Main from '../components/Main';
import InfoUpload from '../components/InfoUpload';
import Header from '../components/Header';
const landingPage = () => {

    return (
        <>
          <Header/>                    
          <Main/>
          <InfoUpload/>
        </>
    )
}

export default React.memo(landingPage);