const express = require("express")
const User = require('../models/user')
const router = express.Router()


router.get('/',(req,res)=>{
    User.find({},(err,data)=>{
        res.render('index',{data:data})
    })
    
})
router.get('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err) throw console.log(err)
        else{
            console.log("deleted")
            res.redirect('/')
        }
    })
})
router.post('/',(req,res)=>{
const newuser = new User({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password
})
newuser.save()
.then(()=>{
    console.log("ok")
    res.redirect('/')
})
    // req.body.name
    // req.body.lastname
    // req.body.email
    // req.body.password
})

module.exports = router;