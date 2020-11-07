function registerNewUser(event) {
    event.preventDefault()
    usersDatabase = retrieveUsersDatabase();

    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    let weekNumber = document.getElementById("weekNumber").value;



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

    // if weekNumber is empty
    if (passWord.length == 0) {
        alert("Password field cannot be empty.");
        return
    }

    // if this username already exists
    if (userName in usersDatabase) {
        alert("This username already exists.");
        return
    }


    // if username and password are valid - create new user in database
    usersDatabase[userName] = {
        username: userName,
        password: passWord,
        weeks: parseInt(weekNumber)
    }
    saveUsersDatabase(usersDatabase);
    location.href = "login.html";
}