const express=require('express')
var app=express()
//const params={id:1,name:"saurav",age:20}
app.get("/profile/:id",(req,res)=>{
res.send(req.params.id)//it will send my id that i will send on my browser
})
app.listen(3)