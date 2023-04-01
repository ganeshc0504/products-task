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

const CartProduct = (product) => {

  const prod = product?.product
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
       <Card sx={{ display: 'flex',m:5, width:500 }}>
        <Box sx={{ display: 'flex',width:"70%", flexDirection: 'column', bgcolor:"Highlight"  }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
         <Typography component="div" variant="h5">{prod.name}</Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">Mac Miller</Typography>
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