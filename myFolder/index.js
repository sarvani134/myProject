const { faker } = require('@faker-js/faker');
const mysql=require("mysql2")
const express=require("express")
const app=express()
const path=require("path");
const { log } = require('console');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"public")))
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'apna',
  password:"sarvani@123"
});

let  createRandomUser=()=> {
  return [
     faker.string.uuid(),
    faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
   
  ];
}
// let q="insert into user (id,username,email,password) values ? ";
// let data=[];
// for(let i=0;i<100;i++){
//   data.push(createRandomUser());
// }
// try{
// connection.query(q,[data],(err,res)=>{
//   if(err) throw err
//   console.log(res)
  
// })
// }
// catch(err){
//   console.log(err);
  
// }

app.listen(3001,()=>{
  console.log("listening from port 3001");
  
})
app.get("/",(req,res)=>{
  res.send("home page of mySql")
})
app.get("/data/search",(req,res)=>{
  res.render("search")
})
app.get("/data/search/name",(req,res)=>{
  let {id}=req.query;
  
   
   let q="select * from user where id=?"
connection.query(q,[id],(err,result)=>{
  if(err){
     console.log(err);
     return res.send("database error")
  }
  if(result.length==0){
    return res.send("id not found")
  }
  console.log(result);
 res.render("showUser",{user:result[0]}) 
})
})

app.patch("/data/edit/:id",(req,res)=>{
  let {name,id}=req.body;
  let newName=name;
  let q=`update user set username='${name}' where id='${id}' `
  connection.query(q,(err,result)=>{

  })

})
app.get("/data/edit/:id",(req,res)=>{

})
app.get("/data/length",(req,res)=>{
  try{
    let q2="select count(*) as count from user"
connection.query(q2,(err,result)=>{
  if(err) throw err
  let c=result[0]["count"];
  res.send(` total students are ${c}`)
  
})
}
catch(err){
  console.log(err);
  res.send("error")
}
})

app.get("/data/records",(req,res)=>{
  
  try{
   let q="select * from user";
connection.query(q,(err,result)=>{
  if(err) throw err
  res.render("records",{result})
  
})
}
catch(err){
  console.log(err);
  res.send("error")
}
  
})
app.get("/data/add",(req,res)=>{
    try{
   let q="select * from user";
connection.query(q,(err,result)=>{
  if(err) throw err
  res.render("add",{data:result})
})
}
catch(err){
  console.log(err);
  res.send("error")
} 
})
app.post("/data/add", (req, res) => {
  const { id, username, email, password } = req.body;

  const q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

  connection.query(q, [id, username, email, password], (err, result) => {
    if (err) {
      console.error(err);

      // duplicate entry (MySQL error code)
      if (err.code === "ER_DUP_ENTRY") {
        return res.send("User already exists");
      }

      return res.status(500).send("Database error");
    }

    res.render("success");
  });
});
