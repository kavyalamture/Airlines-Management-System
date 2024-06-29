const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema.Types
const user = require('./user'); // This should correctly reference the models/users.js file
const flight=require('./flight');
const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        required: true,
        ref:user
    },
    flight:{
        type: ObjectId,
        required: true,
        ref:flight
    },

    
});


module.exports=mongoose.model('Review', reviewSchema,'reviews');