const express= require('express')
const router=express.Router()
const imp=require('../models/flight'); // This should correctly reference the models/users.js file

router.get('/getflight',async(req,res)=>{
    const getall=await imp.find()
    console.log(getall)
res.send(getall)

})
router.post('/addflight',async(req,res)=>{
    //console.log(await imp.find({name:req.body.name}))
    const check=await imp.findOne({location:req.body.name,detination:req.body.destination,pnr:req.body.pnr})
    if (check)
        {res.send({message:"value already found"})}
    else{
    const newuser=new imp({
        location:req.body.location,
        destination:req.body.destination,
        pnr:req.body.pnr,
        Flighttime:req.body.Flighttime,
        Destinationtime:req.body.Destinationtime,
        Date:req.body.Date,
        charges:req.body.charges

    })
    const save=await newuser.save()
    res.json({message:"success",save})}
})

module.exports=router
