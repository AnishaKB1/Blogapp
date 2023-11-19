const mongoose=require ('mongoose');
const sign=mongoose.Schema({
    name:String,
    email:String,
    address :String,
    phonenumber : Number,
    password: String
})
const signdata=mongoose.model('signupdata',sign);
module.exports=signdata;