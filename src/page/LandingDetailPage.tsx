import React from 'react';
import CartMain from '../components/CartMain';
import DetailPage from '../components/DetailPage';
import Header from '../components/Header';

const LandingDetailPage = ( ) => {
       return (
        <>
          <Header/>
          <DetailPage/>
          <CartMain/>          
        </>
    )
}

export default React.memo(LandingDetailPage);