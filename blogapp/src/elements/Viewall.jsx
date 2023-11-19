import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../ui-components/axiosinterceptor';

const Viewall = () => {
  
    const [cardData,setData]= useState([]);
    useEffect(()=>{
       fetchPost();
    },[]);

     function fetchPost(){
      axiosInstance.get('http://localhost:4000/blog').then((res)=>{
        setData(res.data);
        console.log(cardData);
      })
     }

    function deletePost (id) {
      axiosInstance.delete(`http://localhost:4000/blog/postdata/${id}`)
        .then((res) => {
         alert(res.data);
         fetchPost();
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    };

  return (
    <div style={{margin:"7%"}}>
    <Grid container spacing={2}>
        {cardData.map((val,i)=>(
        <Grid item key={i}xs={12} sm={6} md={4}>
   <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image={val.imageurl} title={val.title}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {val.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">{val.post}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" onClick={() => deletePost(val._id)}>Delete</Button>
    <Button size="small" >Update</Button>
  </CardActions>
</Card>
</Grid>
))}
</Grid>
</div>
  );
}

export default Viewall;
