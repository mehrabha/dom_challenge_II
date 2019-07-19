const PASSWORD = "12345678";


function login() {
    let password = document.getElementById("password").value;

    if (password !== PASSWORD) {
        alert("Wrong Password");
    } else {
        document.getElementById("header").innerHTML = "Logged In";
    }
}