let loginButton = document.getElementById("button")

loginButton.addEventListener("click", logIn)

function logIn(event) {
    event.preventDefault()
    usersDatabase = retrieveUsersDatabase();
    let userName;
    let passWord;

    try {
        userName = document.getElementById("username").value
    } catch {}
    try {
        passWord = document.getElementById("password").value
    } catch {};

    // if username is empty
    if (userName.length == 0) {
        alert("Username field cannot be empty.");
        return
    }
    // if password is empty
    if (passWord.length == 0) {
        alert("Password field cannot be empty.");
        return
    }

    // testing the username and password pair
    let tryUsernameAndPassword;
    try {
        tryUsernameAndPassword = usersDatabase[userName]["password"];
        if (typeof(tryUsernameAndPassword) == "undefined") {
            alert("Incorrect data entered.");
            return
        }
    } catch {
        alert("Incorrect data entered.");
        return
    }


    // if username and password are both correct
    if (usersDatabase[userName]["password"] == passWord) {
        localStorage["username"] = userName;
        location.href = "index.html";
    }

    // if the username is correct but password is not
    else {
        alert("Incorrect Password");
        return
    }
}