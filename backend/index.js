const port = 4000;
const express = require( 'express' );
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors= require('cors');


app.use(express.json( )); 
app.use(cors());

mongoose.connect('mongodb+srv://tsaparna2020:aparnaMONGODB2111@cluster0.yl5hcmi.mongodb.net/restaurant');


app.get("/",(req,res)=>{
    res.send("Express App is running")
})

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload = multer({storage:storage})

// creating upload endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})

// creating products

const Product =mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    }, 
    name:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_prie:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true,
    },
    

})

app.post("/addproduct",async (req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_prie:req.body.old_prie,
    });
    console.log(product);
    await product.save();
        console.log("saved")
        res.json({
            success:true,
            name:req.body.name,
        })
})

// creating API for deleting products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})


app.listen(port,(error) =>{
    if(!error){
        console.log("Server running on Port : " + port)
    }
    else
    {
        console.log("Error:" + error)
    }
})
 