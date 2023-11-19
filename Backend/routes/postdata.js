const express = require('express');
const mongoose=require('mongoose');
const path=require('path');
const postdata = require('../model/post');
const router = express.Router()
const jwt=require('jsonwebtoken')

function verifytoken(req,res,next){
  try{
    const token= req.headers.token;
    console.log(token);
    if(!token) throw 'Unauthorized';
    let payload=jwt.verify(token,'reactblogapp');
    if(!payload) throw 'Unauthorized';
    //res.staus(200).send(payload);
    next();

  }catch(error){
    res.status(401).send(error);
  }
}


//CRUD for post data

router.get("/", verifytoken,async (req, res) => {
    try {
      const getpost = await postdata.find();
      res.json(getpost);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  });
  
router.post('/postdata',verifytoken,async (req, res) => {
    const data = new postdata({
        title: req.body.title,
        description: req.body.description,
         imageurl :req.body.imageurl
    })
  
    try {
        const dataToSave = await data.save();
        res.status(200).send("Posted Successfully")
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
  })
  
  
  
  
  router.put("/postdata/:id",verifytoken,async (req, res) => {
  try {
    const id = req.params.id;
  const updateddata = req.body;
  const result = await postdata.findByIdAndUpdate(id, updateddata);
   
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
  });
  
  
  router.delete('/postdata/:id', verifytoken,async (req, res) => {
  try {
      const id = req.params.id;
      const data = await postdata.findByIdAndDelete(id);
      res.json(`Document with ${data.title} has been deleted..`);
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
  })
module.exports=router;
  