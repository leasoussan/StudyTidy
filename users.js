function addUser(event){
  event.preventDefault()

        
  let info = document.getElementById("myform")
  let username = document.getElementById("username").value 
  let password = document.getElementById("password").value
  let programm = document.getElementById("program").value
  
  console.log(username)
  console.log(password)
  console.log(programm)
  
  




let addUserbtn = document.querySelector("button")

addUserbtn.addEventListener("click", addUser)


function user (fname, lname) {
  this.usertName = fname;
  this.password = password;
  this.programm = programm;

}




// Initialize an object with properties and methods
let usersDatabase = {
    "username": "lola",
    "password": "123456",
    "programm": "12 weeks"
  },
  
  {
    username: "jean",
    password: "09876",
    programm: "10 weeks"
  },

  {
    username: "Doris",
    password: "11223344",
    programm: "12 weeks"
  },
  {
      username: "miro",
      password: "24680",
      programm: "14 weeeks"
  }


