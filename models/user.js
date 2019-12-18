const mongoose = require("mongoose");
const Schema = mongoose.Schema;
newScheme = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})
module.exports = mongoose.model('User',newScheme)