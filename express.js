const express=require('Express')
const app=express()

// we have four methods 
// GET
// PUT
// POST
// DELETE

app.get("/",(req,res)=>{
    res.send("Hello world request send through express")

})
app.listen(4000,()=>{
    console.log("Listining to port no. 4000")
})