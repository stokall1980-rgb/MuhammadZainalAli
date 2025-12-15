function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user && pass) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("website").style.display = "block";
    } else {
        alert("Silakan isi username dan password");
    }
}

function logout() {
    document.getElementById("website").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}
