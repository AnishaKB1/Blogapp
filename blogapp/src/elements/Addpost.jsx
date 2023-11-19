import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../ui-components/axiosinterceptor';

const Addpost = () => {

const [Form,setForm]=useState({
  title:'',
  description:'',
  imageurl :'',
  date_update:Date.now()
});

function submitform(){
  axiosInstance.post('http://localhost:4000/blog/postdata',Form).then((res)=>{
    setForm(' ');
    alert(res.data);

  })
}
  return (
    <div style={{margin:'8%'}}>
      <TextField variant='outlined' label='Post Title' fullWidth onChange={(e)=>{
        setForm({...Form,title:e.target.value})}}>

        </TextField>
      <br /><br />
      <TextField variant='outlined' label='Type a Post'  multiline rows={10} fullWidth onChange={(e)=>{
        setForm({...Form,description:e.target.value})}}></TextField>
      <br /><br />

      <TextField variant='outlined' label='Image URL' fullWidth onChange={(e)=>{
        setForm({...Form,imageurl:e.target.value})}}></TextField>
      <br /><br />

      <Button variant='contained' color='secondary' onClick={submitform}>Submit</Button >
    </div>
  );
}

export default Addpost;
