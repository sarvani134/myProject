const input = document.getElementById("studentId");
const namePara = document.getElementById("name");
const msgPara = document.getElementById("msg");

input.addEventListener("input", () => {

    const id = Number(input.value);
    if(!id){
        namePara.value="";
        return;
    }
    
    const student = students.find(s => s.id === id);
    if(!student){
        msgPara.innerText="enter a valid Id"
        namePara.value=""
    }
    else{
        namePara.value=student.name;
    }
    console.log(student)
    
});
