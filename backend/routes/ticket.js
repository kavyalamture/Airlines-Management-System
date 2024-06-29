const express= require('express')
const router=express.Router()
const imp=require('../models/ticket'); // This should correctly reference the models/users.js file

router.post('/getticket',async(req,res)=>{
    const getall=await imp.find({flight:req.body.flight}).populate('user flight')
    console.log(getall)
res.send(getall)

})
router.post('/addticket',async(req,res)=>{
   
    const check=await imp.findOne({seatno:req.body.seatno,flight:req.body.flight})
    if (check)
        {res.send({message:"value already found"})}
    else{
    const newticket=new imp({
        seatno:req.body.seatno,
        user:req.body.user,
        flight:req.body.flight,
        
        
    })
    const save=await newticket.save()
    res.json({message:"success",save})}
})

module.exports=router