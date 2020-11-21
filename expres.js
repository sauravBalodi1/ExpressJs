var express = require('express')
var app = express()

// we have four methods 
// GET
// PUT
// POST
// DELETE

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


app.listen(5000,()=>{
    console.log("Listining to port no. 4000")
})