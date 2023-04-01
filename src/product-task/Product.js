import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RuppeIcon from '@mui/icons-material/CurrencyRupee';
import Grade from '@mui/icons-material/Grade';
import StarHalf from '@mui/icons-material/StarHalf';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/product-slice/ProductSlice';


const Product = ({product})=> {
  
const dispatch = useDispatch()    
const [colour,setColour] = React.useState("grey")

const addingToCart = (prod)=>{
    dispatch(addToCart(prod))
}

  return (
    <Card sx={{ width: 345, m:5,border:"1px solid" }}>
      <CardHeader
        title={product.name}
        subheader={product.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{color:"green"}}>{product.isActive == true? "Available":"Not Available"}</Typography>
        <Typography>{product.description}</Typography>
        <Typography ><b>Price : <RuppeIcon sx={{fontSize:15}}/>{product.price}</b></Typography>
        <Typography sx={{color:"green"}}><b>Discount price : <RuppeIcon sx={{fontSize:15}}/>{product.discountAmount}</b></Typography>
        {
            new Array(product.rating).fill(product.rating).map((r,i)=> r == i+1 ? <StarHalf key={i} sx={{color:"orange"}}/>:<Grade key={i * 10} sx={{color:"orange"}}/>)
        }        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>colour=="grey"?setColour("red"):setColour("grey")} >
          <FavoriteIcon sx={{color:`${colour}`}} />
        </IconButton>
        <IconButton aria-label="share" onClick={()=>addingToCart(product)}>
          <ShoppingCart color='primary' />
        </IconButton>
        
      </CardActions>
    </Card>
  );
}

export default Product;