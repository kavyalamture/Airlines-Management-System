const express= require('express')
const router=express.Router()
const imp=require('../models/review'); // This should correctly reference the models/users.js file

router.get('/getreview',async(req,res)=>{
    const getall=await imp.find().populate('user flight')
    console.log(getall)
res.send(getall)

})
router.post('/addreview',async(req,res)=>{
    
   const newreview=new imp({
        comment:req.body.comment,
        rating:req.body.rating,
        user:req.body.user,
        flight:req.body.flight,
    })
    const save=await newreview.save()
    res.json({message:"success",save})
})

module.exports=router