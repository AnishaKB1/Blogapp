const mongoose=require('mongoose');
const path=require('path');
//  create mongoDB connection 
const mongo_url=process.env.mongo_url;
mongoose.connect(mongo_url)

.then(() => {
    console.log("Connected to BlogAppDB");
  })
  .catch((error) => {
    console.error("Error connecting to BlogAppDB:", error);
  });

