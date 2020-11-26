const express=require('express')
const app=express()
const path=require("path")
const port=8
const hbs=require('hbs')
//const staticPath=path.join(__dirname,"../public")
const staticPartial=path.join(__dirname,"../templates/views")
const Partial=path.join(__dirname,"../templates/views/partials")

console.log(path.join(__dirname,"../templates"))
//to set view engine
app.set('views',staticPartial)
app.set('view engine','hbs')

hbs.registerPartials(Partial)




//builtIn middleware

app.get("",(req,res)=>{
    res.render("index")
})
app.listen(port)