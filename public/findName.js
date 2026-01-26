const input = document.getElementById("studentId");
const namePara = document.getElementById("name");

input.addEventListener("input", () => {
    const id = Number(input.value);
    console.log("hello")
    const student = students.find(s => s.id === id);
    console.log(student)
    namePara.textContent = student ? `Name: ${student.name}` : "enter a valid id ";
});
