import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/AddCircleRounded';
import RemoveIcon from '@mui/icons-material/RemoveCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import CartProduct from './CartProduct' 
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../app/product-slice/ProductSlice';

const CartList = () => {

  
  const cartProduct = useSelector(selectCartProducts)

  return (<>
    <div style={{display:"flex",justifyContent:"center",backgroundColor:"gainsboro", height:"100vh"}}>
    <div >
    {
        Array.isArray(cartProduct) && cartProduct.map((prod,i)=> <CartProduct key={i} product={prod} />)
    }
    </div>
    </div>
    </>
  );
}

export default CartList;