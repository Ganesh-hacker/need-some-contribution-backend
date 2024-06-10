const mongoose = require("mongoose"); 
require('dotenv').config();
const DATABASE=process.env.DATABASE
const connect = mongoose.connect(`${DATABASE}Epharmacy`);
connect.then(() => {
        console.log("Database connected Successfully");
    })
    .catch(() => {
        console.log("Database cannot be connected");
    });
const LoginSchema= new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    mno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    // password: {
    //     type: String,
    //     required: true
    // }
});
const CartproductsSchema= new mongoose.Schema({
    
    
    id: {
        type: String,
        required: true
    },
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    imageUrl: {
        type: String,
        required: true
    },
    manufacturers: {
        type: String,
        required: true
    },
    MRP: {
        type: Number,
        required: true
    },
    
    price: {
        type: Number,
        required: true
      },
      qty: {
        type: Number,
        required: true,
        default: 1
      },
      
  
});

const PurchproductsSchema= new mongoose.Schema({
    
    
    id: {
        type: String,
        required: true
    },
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    imageUrl: {
        type: String,
        required: true
    },
    manufacturers: {
        type: String,
        required: true
    },
    MRP: {
        type: Number,
        required: true
    },
    
    price: {
        type: Number,
        required: true
      },
      qty: {
        type: Number,
        required: true,
        default: 1
      },
      date: { 
        type: Date, 
        default: Date.now 
    }
  
});


const AddressSchema= new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    number: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    houseNumber: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    town: {
        type:String,
        required: true
    },
    state: {
        type:String,
        required: true
    },

});



const Logindetails= new mongoose.model("Logindetails", LoginSchema);
const cartproducts=new mongoose.model("cartproducts",CartproductsSchema)
const purchproducts=new mongoose.model("purchproducts",PurchproductsSchema)
const addresslist=new mongoose.model("addresslist", AddressSchema)
module.exports= {Logindetails,cartproducts,purchproducts,addresslist};
