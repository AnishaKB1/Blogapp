import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import App from  '../App'
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from './axiosinterceptor';

const Login = () => {
 const [user,setUser]=useState();
const navigate=useNavigate();


const inputHandler = (e) =>{
  setUser({...user,[e.target.name]:e.target.value})
}
const addHandler=()=>{
  axiosInstance.post('http://localhost:4000/sign/login',user).then((res)=>{
    alert(res.data);
    if(res.data.message=='success'){
      sessionStorage.setItem("userToken",res.data.token);
      navigate("/addpost")
    }
 
    

  })
  .catch((error) => {
    if (error.response && error.response.status === 401) {
        alert('Invalid credentials. Please try again.');
        setUser(' ');
    } else {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
        setUser(' ');
    }
});
  console.log(user)

}




  return (
    <div className='app'>
         <form className='loginform'>
      <Typography variant='h3' >

        BlogApp Login
      </Typography>
      <br/> <br/>
     
      <TextField  className='text' variant='outlined' label='Email' name='email' onChange={inputHandler}/>
      <br/> <br/>
      <TextField className='text' type='password' variant='outlined' label='Password' name='password' onChange={inputHandler} />
      <br/> <br/>
      <Button variant='contained' className='btn-log'  color='secondary' onClick={addHandler}>Login</Button>
      <br/> <br/> <br/>
  
            <Typography>
            <Link to={'/sign'}>New user clicks here</Link> 
           </Typography>

           </form>
    </div>
  );
}


export default Login;
