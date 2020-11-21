var express = require('express')
var app = express()
const path=require('path')
// we have four methods 
// GET
// PUT
// POST
// DELETE
console.log(__dirname)
//console.log(path.join(__dirname,"../public"))
const staticPath=path.join(__dirname,"../public")

//builtIn middleware
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
  res.send("Hello world request send through express")

})
app.post('/', function (req, res) {
    res.send('Got a POST request')
  })
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })


app.listen(4000,()=>{
    console.log("Listining to port no. 4000")
})