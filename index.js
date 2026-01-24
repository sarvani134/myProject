const express=require("express")
const app=express()
const path=require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
let students=[
    {
        name:"sara",
        id:1,
        age:18,
        marks:100
    },
    {
        name:"millie",
        id:2,
        age:18,
        marks:80
    },
    {
        name:"will",
         id:3,
        age:18,
        marks:10
    },
    {
        name:"mike",
         id:4,
        age:18,
        marks:50
    },
]
app.listen("3001",()=>{
    console.log("listening from port 3001")
})
app.get("/",(req,res)=>{
    res.send("this is home")
})
app.get("/students",(req,res)=>{

    res.render("index",{students})
})
app.get("/students/particular",(req,res)=>{
    let {id}=req.query;
    let student=students.find((item)=>item.id===Number(id));
    console.log(id);
    console.log(typeof(id))
    if(!student){
        return res.send("Id not found , pls enter a valid Id ")
    }
    res.render("show",{student})
})
app.get("/students/fill",(req,res)=>{
    res.render("fillup")
})
