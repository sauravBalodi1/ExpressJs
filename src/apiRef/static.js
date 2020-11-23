const express=require('express')
var app=express()
var path=require('path')
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  const staticPath=path.join(__dirname,"../../public")
  console.log(staticPath)
  app.use(express.static( staticPath,))
//   app.get("",(req,res)=>{
//       res.json(options)
//   })
  app.listen(90)

  //there are also different methods 
  //router,static,json