import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Home from '@mui/icons-material/Home';
import { Link }  from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCartCounter } from '../app/product-slice/ProductSlice';


const  FrontHeader = () => {

  const counter = useSelector(selectCartCounter)

  return (
    <AppBar position="sticky" sx={{bgcolor:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent:"center"}}>
          <AdbIcon sx={{  mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PRODUCTS LIST
          </Typography>
          <Link to='/'>
            <IconButton>
              <Home sx={{color:"white", ml: 10}}/>
            </IconButton>
          </Link>  
          <Link to='/cart'>
            <IconButton>
            <Badge badgeContent={counter} color="primary">
              <ShoppingBag sx={{color:"white"}}/>
            </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FrontHeader;