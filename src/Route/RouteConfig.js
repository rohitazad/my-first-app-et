import React from 'react';

import {BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePageContainer from '../Container/HomePage';
import MyProductDetails from '../Container/Product';
import HeaderComponents from '../Components/Header';
import FooterComponents from '../Components/Footer';
const RouteConfig = ()=>{
    return (
        <>
        
        <BrowserRouter>
        <HeaderComponents />
            <Routes>
                <Route path='/' element={<HomePageContainer />} />
                <Route path='/about' element="Hello i m About page" />
                <Route path='/contact' element="Hello i m Contact page" />
                <Route path='/product/:productId/:detailId/:cate' element={<MyProductDetails /> } />
            </Routes>
        <FooterComponents />
        </BrowserRouter>
        </>
    )
}

export default RouteConfig;