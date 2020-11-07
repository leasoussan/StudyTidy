function saveUsersDatabase(usersDatabase) {
    localStorage.setItem("usersDatabase", JSON.stringify(usersDatabase))
}

function retrieveUsersDatabase() {
    return JSON.parse(localStorage.getItem("usersDatabase"))
}