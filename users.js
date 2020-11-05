let loginButton = document.getElementById("button")




loginButton.addEventListener("click", logIn)

function logIn(event) {
    event.preventDefault()
        // alert("you try to log in")
    let userName = document.getElementById("username").value
    let passWord = document.getElementById("password").value

    // usersDatabase[username]
    //beacuse we are in an object = we can't loop so we give conditional
    if (typeof(userName) == "undefined") {
        alert("you are not registered")
    } else {
        if (usersDatabase[userName]["password"] == passWord) {
          localStorage["username"] = userName;  
          location.href = "index.html";
          } 

      }     
    } 
    


    
      
  



    // if (usersDatabase[userName]["password"] > data[0]){
    //   console.log(usersDatabase[userName]["data"])}
    //   else{ createForm() 
    //   }