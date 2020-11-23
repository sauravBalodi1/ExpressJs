var fs=require('fs')
const express=require('express')
var app=express()
var path=require('path')
app.engine('txt',(ft,options,callback)=>{
    fs.readFile(ft,'utf-8',(err,content)=>{
        if(err)return callback(err)
        var rendered=content.replace('#title',`<title> ${options.title} </title>`).replace('#message','<h1>'+options.message+'</h1>')
        return callback(null,rendered)



    })
})
console.log(path.join(__dirname,"../../views"))
app.set('views',path.join(__dirname,"../../views"))
app.set('view engine','txt')
app.get("/",(req,res)=>{
    res.render('template',{title:'hey',message:'hello there'})
})
app.listen(4)