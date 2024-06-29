const express= require('express')
const router=express.Router()
const imp=require('../models/user'); // This should correctly reference the models/users.js file

router.get('/getuser',async(req,res)=>{
    const getall=await imp.find()
    console.log(getall)
res.send(getall)

})
router.post('/signup',async(req,res)=>{
    console.log(await imp.find({name:req.body.name}))
    const check=await imp.findOne({name:req.body.name})
    if (check)
        {res.send({message:"value already found"})}
    else{
    const newuser=new imp({
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
        age:req.body.age,
    })
    const save=await newuser.save()
    res.json({message:"success",save})}
})

module.exports=router
