let nameText = document.getElementById("nameUser");
let idText = document.getElementById("idUser");
let emailText = document.getElementById("emailUser");
let passwordText=document.getElementById("passwordUser")

// Helper function
function isDuplicate(value, key) {
    return users.some(user => user[key] === value);
}

// Username check
nameText.addEventListener("blur", () => {
    if (isDuplicate(nameText.value, "username")) {
        alert("Username already exists");
        nameText.value = "";
    }
});

// ID check
idText.addEventListener("blur", () => {
    if (isDuplicate(idText.value, "id")) {
        alert("ID already exists");
        idText.value = "";
    }
});

// Email check
emailText.addEventListener("blur", () => {
    if (isDuplicate(emailText.value, "email")) {
        alert("Email already exists");
        emailText.value = "";
    }
});





