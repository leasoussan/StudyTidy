function addUser(event){

        
  let info = document.getElementById("myform")
  let user = document.createElement("div")
  let username = document.getElementById("username") 
  let password = document.getElementById("password")
  let programm = document.getElementById("weeks")  

  // addUser.username = username;
  // addUser.password = password;
  // addUser.programm = programm;
  
  user.appendChild(username)
  user.appendChild(password)
  user.appendChild(programm)
}




let addUserbtn = document.querySelector("button")

addUserbtn.addEventListener("click", addUser)


// Initialize an object with properties and methods
const usersDatabase = [{
    username: "lola",
    password: "123456",
    programm: "12 weeks"
  },
  
  {
    username: "jean",
    password: "09876",
    programm: "10 weeks",
  },

  {
    username: "Doris",
    password: "11223344",
    programm: "12 weeks",
  },
  {
      username: "miro",
      password: "24680",
      programm: "14 weeeks",
  }
]

