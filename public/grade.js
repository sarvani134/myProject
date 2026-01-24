function getGrade(marks) {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 40) return "D";
    return "Fail";
}
document.addEventListener("DOMContentLoaded",()=>{
    let marks=Number(document.getElementById("marks").innerText)
    let g=getGrade(marks)
    document.getElementById("grade").innerText=g;
    console.log(g)

})