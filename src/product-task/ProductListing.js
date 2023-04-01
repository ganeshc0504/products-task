import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../app/product-slice/ProductSlice';
import Product from './Product'

const ProductListing = () => {

    const products = useSelector(selectProducts)

    return ( <>
    <h2>Product List</h2>
    <div>
    <div style={{display:"flex",marginLeft:30, flexWrap:"wrap"}}>
    {
        Array.isArray(products) && products.map((prod,i)=><Product key={i} product={prod}/>)
    }
    </div>
    </div>
    </> );
}
 
export default ProductListing;