const bodyparser=require("body-parser")
const express=require("express")
const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/ser.html")

})
app.post("/form",(req,res)=>{
    //res.send(req.body)
    res.send("Hello "+req.body.name)
})
app.listen(3000,()=>{
    console.log("app listen to 3000")
})
