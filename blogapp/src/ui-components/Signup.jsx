import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from './axiosinterceptor';

const Signup = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState();


  const handleChange = (e) => {
    
    setFormData({
      ...formData,[e.target.name]:e.target.value })
    }

  const handleSubmit = ( ) => {
   // e.preventDefault();
    console.log('Form data:', formData);
    // You can also send the form data to a server or perform further actions here.
      axiosInstance.post('http://localhost:4000/sign/blogdata',formData).then((res)=>{
        alert(res.data);
    navigate("/addpost")
  })
}





  return (
    <div style={{margin:"6%"}}>
       <Typography variant='h3'id='sign' >

BlogApp SignUp
</Typography>
<br/> <br/>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
           <TextField variant='outlined' fullWidth label='Name'   name='name'
          onChange={handleChange} />
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
           <TextField variant='outlined' fullWidth label='Email' name='email'
           onChange={handleChange} />
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <TextField variant='outlined' fullWidth label='Address' multiline rows={4}   name='address'
           onChange={handleChange}/>
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
           <TextField variant='outlined' fullWidth label='Phone Number' name='phonenumber'
           onChange={handleChange} />
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
           <TextField variant='outlined' fullWidth label='Password' name='password'
           onChange={handleChange} />
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Button variant='contained' color='secondary' onClick={handleSubmit} >Submit </Button>
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
            <br/>
           <Typography>
            <Link to={'/'}> Back to Login</Link >
           </Typography>
           </Grid>
           
          </Grid>
    </div>
  );
}

export default Signup;
