let dailyWorkLoad = {};


let date;
let dailySubject;
let platformLink
let checkboxesChoice;


function dailyStudyProgram() {

    //calling the div
    div = document.getElementById("div")

    //creating the form
    let form = document.createElement("form")
 
    //datelable and input
    let labeldate = document.createElement("label")
    date = document.createElement("input")
    labeldate.innerHTML = "Date"
    date.setAttribute("type", "date")
    date.setAttribute("id", "date")
    form.appendChild(labeldate) 
    form.appendChild(date)

    //daily Subject labeland Input
    let dailySubjectlabel = document.createElement("label")
    dailySubject= document.createElement("input")
    dailySubjectlabel.innerHTML="Daily Subject"
    dailySubjectlabel.setAttribute("type", "text")
    form.appendChild(dailySubjectlabel)
    form.appendChild(dailySubject)

    //link to cours
    platformLink = document.createElement("input")
    platformLink.setAttribute("placeholder", "Your Course Link")
    platformLink.setAttribute("id", "courseLink")
    platformLink.setAttribute("type", "text")
    form.appendChild(platformLink)


    //getting ex of the day 
    
    var ExcerciesTypeArray = ["practice", "XP", "XP Gold", "Ninja", "Daily Chalenge", "Mini-Project"];

    // var ExcerciesType = document.getElementById("cboxes");

    for (var i = 0; i < ExcerciesTypeArray.length; i++) {
        var checkBox = document.createElement("input");
        var checkBoxlabel = document.createElement("label");
        checkBox.type = "checkbox";
        checkBox.name = "exerciceType"
        checkBox.value = ExcerciesTypeArray[i];
        form.appendChild(checkBox);
        form.appendChild(checkBoxlabel);
        checkBoxlabel.appendChild(document.createTextNode(ExcerciesTypeArray[i]));
        
        }
       checkboxesChoice = document.querySelectorAll(`input[name="exerciceType"]:checked`);
        console.log(checkboxesChoice)


    





        // create a button
            button = document.createElement("button");
            button.innerHTML = "Start My Day"
        
            form.appendChild(button)

    //append all to the body 

    document.body.appendChild(form)

}


dailyStudyProgram()



button.addEventListener("click", getDailyDetails)

//action function
    function getDailyDetails(event){
        event.preventDefault()
        
    
       

        let dateValue = date.value;
        let dailySubjectValue = dailySubject.value;
        let platformLinkValue = platformLink.value;
        let checkboxesExcercicesType = checkboxesChoice.value

        

        dailyWorkLoad["date"] = dateValue;
        dailyWorkLoad["dailySubject"] =dailySubjectValue;
        dailyWorkLoad["LinkToCours"] = platformLink;
        dailyWorkLoad["ExcerciesType"]=checkboxesExcercicesType;

        console.log("Daily Ex:", dailyWorkLoad)

    }

