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
        wantRevaluation:false,
        isEnrolled:false

    },
    {
        name:"millie",
        id:2,
        age:18,
        marks:80,
         wantRevaluation:false,
         isEnrolled:false
    },
    {
        name:"will",
         id:3,
        age:18,
        marks:10,
        wantRevaluation:false,
        isEnrolled:false
    },
    {
        name:"mike",
         id:4,
        age:18,
        marks:50,
        wantRevaluation:false,
        isEnrolled:false
    },
    {
        name:"lucas",
         id:5,
        age:18,
        marks:30,
        wantRevaluation:false,
        isEnrolled:false
    },
    {
        name:"max",
         id:6,
        age:18,
        marks:60,
        wantRevaluation:false,
        isEnrolled:false
    },
]
app.listen("3001",()=>{
    console.log("listening from port 3001")
})
app.get("/students/revalStudents",(req,res)=>{
    let revaluatedStudents=students.filter((item)=>item.wantRevaluation===true)

    res.render("showReval",{students:revaluatedStudents})
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
app.get("/students/notEnrolled",(req,res)=>{
    res.render("notEnrolled",{students})
})
app.post("/students/enrolled",(req,res)=>{
    let {id}=req.body;
    let student=students.find((item)=>item.id===Number(id));
    student.isEnrolled=true;
    res.render("enrolledSuccess")

})
app.get("/students/revaluation",(req,res)=>{
   
    res.render("revaluation",{students})

})
app.post("/students/revaluation",(req,res)=>{
    let {id}=req.body;
    let student=students.find((item)=>item.id===Number(id));
    if(!student){
        return res.send("invalid id ")
    }
    student.wantRevaluation=true;
    res.render("revSuccess",{student});
})
app.get("/students/particular/:id",(req,res)=>{
    let {id}=req.params;
    let student=students.find((item)=>item.id===Number(id));
  
    if(!student){
        return res.send("Id not found , pls enter a valid Id ")
    }
    res.render("show",{student})

})
app.get("/students/enroll",(req,res)=>{
    res.render("enrollForm",{students})
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
