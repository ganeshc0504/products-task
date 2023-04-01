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
import { useDispatch } from 'react-redux';
import {removeFromCart } from '../app/product-slice/ProductSlice'
import StarHalf from '@mui/icons-material/StarHalf';
import Grade from '@mui/icons-material/Grade';

const CartProduct = (product) => {

  const prod = product?.product
console.log("prf",prod);
  const [count, setCount] = React.useState(1)
  
  const dispatch = useDispatch()

  const increment = ()=>{
    setCount(count + 1)
  }
  
  const decrement = ()=>{
    if(count > 1)setCount(count - 1)
  }

  const deleteFromCart = (prod)=>{
    dispatch(removeFromCart(prod))
  }

  return (<>
       <Card sx={{ display: 'flex',m:{xs:3,md:5}, width:{xs:350,md:600} }}>
        <Box sx={{ display: 'flex',width:"70%", flexDirection: 'column', bgcolor:"bisque"  }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
         <Typography component="div" variant="h5">{prod.name}</Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">{prod.description}</Typography>
         <Typography variant="h6" color="text.secondary" component="div">Amount - {prod.price}</Typography>
         <Typography variant="h6" color="green" component="div" fontSize={16}>Discount Amount - {prod.discountAmount}</Typography>
         {
           new Array(prod.rating).fill(prod.rating).map((r,i)=> r == i+1 ? <StarHalf key={i} sx={{color:"orange"}}/>:<Grade key={i * 10} sx={{color:"orange"}}/>)
          }
          <Typography variant="h6" component="div" color="text.secondary" fontSize={12}>Review - {prod.reviewCount}</Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         <IconButton aria-label="" onClick={decrement}>
            <RemoveIcon />
         </IconButton>
         <Typography>{count}</Typography>   
         <IconButton aria-label="" onClick={increment}>
            <AddIcon />
         </IconButton>
         <IconButton aria-label=""  sx={{ml:"auto"}} onClick={()=>deleteFromCart(prod)}>
            <DeleteIcon />
         </IconButton>
        </Box>
        </Box>
       <CardMedia
         component="img"
         sx={{ width: "30%" }}
         image={prod.imageUrl}
         alt="Live from space album cover"
        />
     </Card>
    </>
  );
}

export default CartProduct;