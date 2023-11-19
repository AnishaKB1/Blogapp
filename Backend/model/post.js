const mongoose=require ('mongoose');
const posts=mongoose.Schema({
    title:String,
    description:String,
    imageurl :String,
    date_update:Date
})
const postdata=mongoose.model('postdata',posts);
module.exports=postdata;