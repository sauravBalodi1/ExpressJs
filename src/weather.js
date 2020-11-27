var express = require('express')
var app = express()
const path=require('path')
const port=5;
// we have four methods 
// GET
// PUT
// POST
// DELETE
const p=require('partials')
const hbs=require('hbs')
const requests=require('requests')
//to set the view engine
const partial=path.join(__dirname,"../templates/views")





app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../templates/views"))
//hbs.registerPartials(partial)
// app.get("/",(req,res)=>{//braces khali rehne do,koi dikkt nai
//   res.render("index")
//   })
  app.get("/about",(req,res)=>{
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=aec5abe2f2aceaa45e358a7b1aa1f561`)
    .on('data',(chunk)=>{
        const objdata=JSON.parse(chunk)//converting json to object
        const arrayObj=[objdata]
   console.log(`The minimum temperature is: ${(arrayObj[0].main.temp_min-273)} ${arrayObj[0].name}`)
   
   res.send(`The minimum temperature is: ${(arrayObj[0].main.temp_min-273)} ${arrayObj[0].name}`)
  //  rep.write(realTimeData)
    })
    .on('end',(err)=>{
        if(err)return console.log("cnnection is lost")

      res.send()
    })
  })
  app.get("*",(req,res)=>{
    res.render("404",{notfound:"404 error"})
    })//this is basically operator



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