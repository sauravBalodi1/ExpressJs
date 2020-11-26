var express = require('express')
var app = express()
const path=require('path')
const port=4;
// we have four methods 
// GET
// PUT
// POST
// DELETE
const p=require('partials')
const hbs=require('hbs')
//to set the view engine
const partial=path.join(__dirname,"../templates/views/partials")





app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../templates/views"))
hbs.registerPartials(partial)
app.get("",(req,res)=>{//braces khali rehne do,koi dikkt nai
  res.render("index")
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


app.listen(port,()=>{
    console.log("Listining to port no. "+port)
})