const { log } = require("console")
const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const app=express()
const Chat=require("./chat.js")
app.use(express.json())
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.listen(8000,()=>{
    console.log("listening from port 8000");
    
})
let chat1=new Chat({
    from:'sara',
    to:'adi',
    message:'hello',
    created_at:new Date()
})
chat1.save()
.then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
app.get("/",(req,res)=>{
    res.send("mongoDir homepage")
})
async function main(){
 await mongoose.connect('mongodb://localhost:27017/piyush')
}
main()
.then((res)=>{
    console.log("connected to db");
    
})
.catch((err)=>{
    console.log(err);
    
})
