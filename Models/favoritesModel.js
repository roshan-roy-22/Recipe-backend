const mongoose = require('mongoose')

const favoritesSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const favourites = mongoose.model("favourites",favoritesSchema)
module.exports=favourites;