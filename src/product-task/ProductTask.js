import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../cart/Cart';
import FrontHeader from '../Header/FrontHeader';
import ProductListing from './ProductListing'
import ProductApi from '../service/ProductApi'
import { useDispatch } from 'react-redux';
import {addProducts} from '../app/product-slice/ProductSlice'

const ProductTask = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        ProductApi.fetchProducts().then((res)=>{
            dispatch(addProducts(res.data))  
            document.cookie = 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8'          
        }).catch((err)=>{
            console.log("err",err);
        })
    },[])

    return ( <>
    <FrontHeader />

    <Routes>
        <Route path='/' element={<ProductListing />}/>
        <Route path='/cart' element={<Cart />}/>
    </Routes>
    </> );
}
 
export default ProductTask;