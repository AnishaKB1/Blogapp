import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography, withTheme } from '@mui/material';

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography id='blog'    variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button className='btn' color="inherit"><Link to={'/addpost'} style={{color:"white",textDecoration:'none'}}> Add Post</Link>   </Button>
          <Button className='btn' color="inherit"> <Link to={'/viewall'}style={{color:"white",textDecoration:'none'}}> View all Post</Link> </Button>
          <Button className='btn' color="inherit"> <Link to={'/myprofile'}style={{color:"white",textDecoration:'none'}}> My profile</Link> </Button>
          <Button className='btn' color="inherit"><Link to={'/Logout'} style={{color:"white",textDecoration:'none'}} > Log Out</Link> </Button>
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  );
}

export default Navbar;
