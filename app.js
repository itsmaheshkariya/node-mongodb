const express = require("express")
// const bodyParser = require("body-parser")
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/temp", { useNewUrlParser: true, useUnifiedTopology: true })
const app = express();
// app.set("view engine", "pug")
// app.use(bodyParser.urlencoded({extended:true}))
// app.use('/',require('./routes/index'))
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(process.env.PORT || 5000)