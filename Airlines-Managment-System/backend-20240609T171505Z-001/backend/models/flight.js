const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    
    
    location: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    pnr: {
        type: String,
        required: true
    },
    Flighttime:
    {
        type:String,
        required:true
    },
    Destinationtime:
    {
        type:String,
        required:true
    },
    Date:
    {
     
        type:String,
        required:true
    },
    charges:
    {
     
        type:String,
        required:true
    }

    }
   
);


module.exports=mongoose.model('Flight', flightSchema,'flights');