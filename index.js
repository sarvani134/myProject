const express=require("express")
const app=express()
const mongoose=require("mongoose")
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
        marks:100,
        wantRevaluation:false
    },
    {
        name:"millie",
        id:2,
        age:18,
        marks:80,
         wantRevaluation:false,
    },
    {
        name:"will",
         id:3,
        age:18,
        marks:10,
        wantRevaluation:false,
    },
    {
        name:"mike",
         id:4,
        age:18,
        marks:50,
        wantRevaluation:false,
    },
    {
        name:"lucas",
         id:4,
        age:18,
        marks:30,
        wantRevaluation:false,
    },
    {
        name:"max",
         id:4,
        age:18,
        marks:60,
        wantRevaluation:false,
    },
]
app.listen("3001",()=>{
    console.log("listening from port 3001")
})
app.post("/students/revaluation/:id",(req,res)=>{
    let {id}=req.body;
    let student=students.find((item)=>item.id===Number(id));
    if(!student){
        return res.send("invalid id ")
    }
    student.wantRevaluation=true;
    res.render("revSuccess",{student});
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
   
    if(!student){
        return res.send("Id not found , pls enter a valid Id ")
    }
    res.render("show",{student})
})
app.get("/students/revaluation/:id",(req,res)=>{
    res.render("revaluation")

})
app.get("/students/particular/:id",(req,res)=>{
    let {id}=req.params;
    let student=students.find((item)=>item.id===Number(id));
  
    if(!student){
        return res.send("Id not found , pls enter a valid Id ")
    }
    res.render("show",{student})

})
app.get("/students/fill",(req,res)=>{
    res.render("fillup")
})
app.get("/students/top3",(req,res)=>{
    let top3=[...students]
    .sort((a,b)=>b.marks-a.marks)
    .slice(0,3)
    res.render("top3",{students:top3})
})
