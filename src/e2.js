const express=require("express")
const app=express()

app.get("/temp",(req,res)=>{
res.send([,{
    id:1,
    name:"Saurav"
,roll:null
},{
    id:1,
    name:"Saurav"

},{
    id:1,
    name:"Saurav"

}])

//by this way i have passed my json data
})
app.get("/",(req,res)=>{
    res.json([,{
        id:12,
        name:"Saurav",
         roll:null
    },{
        id:12,
        name:"Saurav"
    
    },{
        id:12,
        name:"Saurav"
    
    }])
})
app.listen(7000,()=>{console.log("lis")})