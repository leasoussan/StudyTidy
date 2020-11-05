
let usersDatabase = {

      lola: {
      username: "lola",
      password: "123456"
      
      },
  
      jean: {
      username: "jean",
      password: "09876"
      },

      doris: {
    username: "Doris",
    password: "11223344"
      },
      miro: {
      username: "miro",
      password: "24680"
     }
    }

// console.log(usersDatabase)

let loginButton = document.getElementById("button")




loginButton.addEventListener("click", logIn)

function logIn(event){
  event.preventDefault()
  // alert("you try to log in")
  let userName = document.getElementById("username").value
  let passWord = document.getElementById("password").value

  // usersDatabase[username]
//beacuse we are in an object = we can't loop so we give conditional
  if (typeof (userName) == "undefined"){
    alert("you are not registered")
  } else {
    if (usersDatabase[userName]["password"] == passWord){
      location.href = "index.html"
    }
  }

  }


//   for (i = 0; i<usersDatabase.length; i++){
//     if( usersDatabase[i].username === userName){
//       alert("Welcome")
    
//       location.href =  "/file:///C:/Users/Lea%20Soussan/Desktop/StudyTidy/index.html"
//       break;
//     }
//     else {
//       alert("please register before")
//       break;
//     }
//   }
// }





// let topicsObject = {
//   "weekContainer-1": {
//       "topicContainer-1-1": {
//           "topicName": "HTML Basics",
//           "exercises": {
//               "Practice": "green",
//               "XP": "red",
//               "XP Gold": "yellow",
//               "XP Ninja": "orange",
//               "Mini-project": "green"
//           },
//           "notes": "some notes",
//           "url": "www.google.com"
//       },
//       "topicContainer-1-2": {
//           "topicName": "CSS Basics",
//           "exercises": {
//               "Practice": "red",
//               "XP": "green",
//               "Mini-project": "yellow"
//           },
//           "notes": "some notes",
//           "url": "www.google.com"
//       }
//   },
//   "weekContainer-2": {
//       "topicContainer-2-1": {
//           "topicName": "JavaScript Basics",
//           "exercises": {
//               "Practice": "red",
//               "XP": "green",
//               "XP Gold": "yellow",
//               "XP Ninja": "orange",
//               "Mini-project": "red"
//           },
//           "notes": "some notes",
//           "url": "www.google.com"
//       },
//       "topicContainer-2-2": {
//           "topicName": "JavaScript Basics",
//           "exercises": {
//               "Practice": "red",
//               "XP": "green",
//               "XP Gold": "yellow",
//               "XP Ninja": "orange",
//               "Mini-project": "red"
//           },
//           "notes": "some notes",
//           "url": "www.google.com"
//       }
//   }
// }

