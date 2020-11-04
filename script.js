
function dailyWork (){
    let today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(date)
}

 dailyWork()






let dailyWorkLoad = {};


let date;
let dailySubject;
let divExcercicesCheckboxContainer;


function creatStudyDay() {

    div = document.getElementById("div")

    let form = document.createElement("form")
 
    let ldate = document.createElement("label")
    ldate.innerHTML = "Date"
    date = document.createElement("input")
    date.setAttribute("type", "date")
    
    form.appendChild(ldate)
    form.appendChild(date)



    // Subject element
    let ldailySubject = document.createElement("label")
    ldailySubject.innerHTML = "Today's Subject"
    dailySubject = document.createElement("input");
    dailySubject.setAttribute("type", "text")
    ldailySubject.style.background="blue"
    form.appendChild(ldailySubject)
    form.appendChild(dailySubject)



    divExcercicesCheckboxContainer = document.createElement("div")
    divExcercicesCheckboxContainer.setAttribute("id", "checkboxContainer")
    divExcercicesCheckboxContainer.setAttribute("class", "checkboxContainer")

    let array =["practice", "XP", "XP Gold", "Ninja", "Daily Chalenge", "Mini-Project"]
    for (i=0; i< array.length; i++){
        let label=document.createElement("label");
        label.innerHTML= array[i]
        let input = document.createElement("input");
        input.setAttribute("class", "checkbox")
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", "checkbox-" + i)
        divExcercicesCheckboxContainer.appendChild(label)
        divExcercicesCheckboxContainer.appendChild(input)
        form.appendChild(divExcercicesCheckboxContainer)
    }
    
    
    
    // for (let ex of array ){
    //     let label=document.createElement("label");
    //     label.innerHTML= ex
    //     let input = document.createElement("input");
    //     input.setAttribute("type", "checkbox")
    //     divExcercicesCheckboxContainer.appendChild(label)
    //     divExcercicesCheckboxContainer.appendChild(input)
    //     form.appendChild(divExcercicesCheckboxContainer)
    // }


    // create a button
    button = document.createElement("button");
    button.innerHTML = "Start My Day"

    form.appendChild(button)
    
    
    document.body.appendChild(form)

}

creatStudyDay()





// create event listener to the button.

button.addEventListener("click", getDailyDetails)

//function called when button clicked
function getDailyDetails(event){
    event.preventDefault()
    

    let dateValue = date.value;
    let dailySubjectValue = dailySubject.value;
    let checkboxesExcercicesType = divExcercicesCheckboxContainer.value;
    
    


    // document.getElementsByClassName("checkbox");
   
    // for (checkedbox in checkboxesExcercicesType){
    //     console.log(checkedbox)
    // }

   

     
    dailyWorkLoad["date"] = dateValue;
    dailyWorkLoad["dailySubject"] =dailySubjectValue;
    dailyWorkLoad["ExcerciesType"]=checkboxesExcercicesType;


    console.log("Daily Ex:", dailyWorkLoad)
}

