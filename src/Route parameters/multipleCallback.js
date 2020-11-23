const express=require('express')
var app=express()

app.get("/",(req,res,callback)=>{

console.log("hello")
callback()
}
,
(req,res)=>{
    res.send("heelo from second function")
}
)

// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   var cb2 = function (req, res) {
//     res.send('Hello from C!')
//   }
  
//   app.get('/', [cb0, cb1, cb2])
app.listen(3)