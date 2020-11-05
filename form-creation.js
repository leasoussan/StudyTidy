function createForm() {
    // parent to which the form is appended
    let parent = document.getElementsByClassName("main-page-left-bar")[0];

    // remove previous form if exists
    try {
        let previousForm = document.getElementById("inputCollectionForm");
        parent.removeChild(previousForm);
    } catch {};

    // FORM
    let inputCollectionForm = document.createElement("form");
    inputCollectionForm.setAttribute("id", "inputCollectionForm");




    // WEEK INPUT
    //creating a div with week input
    let weekInputDiv = document.createElement("div");
    weekInputDiv.setAttribute("id", "weekInputDiv");

    let weekInput = document.createElement("select");
    weekInput.setAttribute("class", "weekInput");
    weekInput.setAttribute("id", "weekInput-start");
    // creating options
    for (let i = 0; i < weeks; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `Week_${i+1}`);
        option.innerText = `Week ${i+1}`;
        weekInput.appendChild(option);
    }
    weekInputDiv.appendChild(weekInput);

    // WEEKDAY INPUT
    //creating a div with weekday input
    let weekdayInputDiv = document.createElement("div");
    weekdayInputDiv.setAttribute("id", "weekdayInputDiv");

    let weekdayInput = document.createElement("select");
    weekdayInput.setAttribute("class", "weekdayInput");
    weekdayInput.setAttribute("id", "weekdayInput-start");
    for (let i = 0; i < 5; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `Day_${i+1}`);
        option.innerText = `Day ${i+1}`;
        weekdayInput.appendChild(option);
    }
    weekdayInputDiv.appendChild(weekdayInput);




    // SUBJECT INPUT
    // creating subject input - label pair div
    let subjectInputLabelPairDiv = document.createElement('div');
    subjectInputLabelPairDiv.setAttribute("id", "subjectInputLabelPairDiv");
    subjectInputLabelPairDiv.setAttribute("class", "subjectInputLabelPairDiv");

    // creating subject input div
    let subjectInputDiv = document.createElement("div");
    subjectInputDiv.setAttribute("id", "subjectInputDiv");

    // creating subject input
    let subjectInput = document.createElement("input");
    subjectInput.setAttribute("type", "text");
    subjectInput.setAttribute("class", "subjectInput");
    subjectInput.setAttribute("id", "subjectInput-start");
    subjectInputDiv.appendChild(subjectInput);
    //creating subject input label
    let subjectInputLabel = document.createElement("label");
    subjectInputLabel.setAttribute("id", "subjectInputLabel");
    subjectInputLabel.setAttribute("class", "subjectInputLabel");
    subjectInputLabel.innerText = "Day's Subject";
    subjectInputDiv.appendChild(subjectInputLabel);

    subjectInputLabelPairDiv.appendChild(subjectInputDiv);




    // CHECKBOX INPUT
    // creating a div with checkboxes and labels
    let checkboxesInputSection = document.createElement("section");
    checkboxesInputSection.setAttribute("id", "checkboxesInputSection")

    // creating a div with checkboxes
    let checkboxesInputDiv = document.createElement("div");
    // creating as many checkboxes as there are exercise types
    for (i = 0; i < exerciseNames.length; i++) {
        // create div for a checkbox - label pair
        let checkboxAndLabelDiv = document.createElement("div");

        //creating a checkbox input element
        let checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.setAttribute("class", "checkboxInput");
        checkboxInput.setAttribute("id", `checkboxInput_${i+1}`);
        checkboxAndLabelDiv.appendChild(checkboxInput);
        // creating a checkbox label element
        let checkboxLabel = document.createElement("label");
        checkboxLabel.innerText = exerciseNames[i];
        checkboxLabel.setAttribute("class", "checkboxLabel");
        checkboxLabel.setAttribute("id", `checkboxLabel_${i+1}`);
        checkboxAndLabelDiv.appendChild(checkboxLabel);

        // appending checkbox - label pair to parent
        checkboxesInputDiv.appendChild(checkboxAndLabelDiv);
    }
    //append the checkboxAndLabelDiv to checkboxesInputSection 
    checkboxesInputSection.appendChild(checkboxesInputDiv);



    // URL INPUT
    // create url input div
    let urlInputDiv = document.createElement("div");
    // create urlInput - urlLabel pair div
    let urlInputLabelDiv = document.createElement("div");
    // create url input
    let urlInput = document.createElement("input");
    urlInput.setAttribute("type", "text");
    urlInput.setAttribute("class", "urlInput");
    urlInput.setAttribute("id", "urlInput");
    urlInputLabelDiv.appendChild(urlInput);
    // create url input label
    let urlLabel = document.createElement("label");
    urlLabel.setAttribute("id", "urlLabel");
    urlLabel.setAttribute("class", "urlLabel");
    urlLabel.innerText = "Day's URL";
    urlInputLabelDiv.appendChild(urlLabel);

    urlInputDiv.appendChild(urlInputLabelDiv);



    // NOTES INPUT
    let notesInputLabelPairDiv = document.createElement("section");

    // create notes input div
    let notesInputDiv = document.createElement("div");
    // create notes input
    let notesInput = document.createElement("input");
    notesInput.setAttribute("id", "notesInput");
    notesInput.setAttribute("class", "notesInput");
    notesInputDiv.appendChild(notesInput);
    notesInputLabelPairDiv.appendChild(notesInputDiv);
    // create notes label div
    let notesLabelDiv = document.createElement("div");
    // create notes label
    let notesLabel = document.createElement("label");
    notesLabel.setAttribute("id", "notesLabel");
    notesLabel.setAttribute("class", "notesLabel");
    notesLabel.innerText = "Notes";
    notesInputLabelPairDiv.appendChild(notesLabel);



    // SUBMIT FORM BUTTON
    // creating the submit button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "startingInputSubmitButton");
    submitButton.innerText = "Start My Day";



    // APPEND dateInputDiv, subjectInputDiv, checkboxesInputSection, submitButton to inputCollectionForm
    inputCollectionForm.appendChild(weekInputDiv);
    inputCollectionForm.appendChild(weekdayInputDiv);
    inputCollectionForm.appendChild(subjectInputDiv);
    inputCollectionForm.appendChild(checkboxesInputSection);
    inputCollectionForm.appendChild(urlInputDiv);
    inputCollectionForm.appendChild(notesInputLabelPairDiv);
    inputCollectionForm.appendChild(submitButton);

    // APPEND THE FORM TO A PARENT (function argument)
    parent.appendChild(inputCollectionForm);


    // FUNCTIONALITY TO COLLECT INPUT
    let startMyDayButton = document.getElementById("startingInputSubmitButton")

    function insertTopicInputIntoTree(event) {
        event.preventDefault();

        let username = document.getElementById("username").innerText;
        let weekInput = document.getElementById("weekInput-start").value;
        let weekdayInput = document.getElementById("weekdayInput-start").value;
        let subjectInput = document.getElementById("subjectInput-start").value;
        let checkboxes = document.getElementsByClassName("checkboxInput");
        let checkboxValues = [];
        for (checkbox of checkboxes) {
            checkboxValues.push(checkbox.checked);
        }
        let urlInput = document.getElementById("urlInput").value;
        let notesInput = document.getElementById("notesInput").value;

        parent.removeChild(inputCollectionForm);





        // INSERT NEW INFORMATION INTO TREE
        // Inserting the new information into the tree and the usersDatabase js

        function updateTopicTree() {
            let dataObject = usersDatabase[username]["data"];
            let weeks = document.getElementsByClassName("weekContainer")
            for (week of weeks) {
                let weekHeader = week.getElementsByClassName("weekHeader")[0];
                let weekHeaderText = weekHeader.innerText;
                if (weekHeaderText == weekInput.replace("_", " ")) {
                    // we located the week, now we locate the subject
                    let topicElements = week.getElementsByClassName("topicContainer");
                    // we select the topic by index of the input day
                    let inputDayNum = weekdayInput[weekdayInput.length - 1];
                    let topicElement = topicElements[parseInt(inputDayNum) - 1];

                    // topicElement is the topic that has to be ammended
                    let topicElementHeader = topicElement.getElementsByClassName("topicHeader")[0];
                    topicElementHeader.innerText = subjectInput;
                    let topicElementExercises = topicElement.getElementsByClassName("exercise");
                    for (let i = 0; i < topicElementExercises.length; i++) {
                        let exerciseElement = topicElementExercises[i];
                        let exerciseName = exerciseNames[i];
                        exerciseName = exerciseName.replace("_", " ");
                        let exerciseBoolean = checkboxValues[i];
                        if (exerciseBoolean == true) {
                            exerciseElement.innerText = exerciseName;
                            try {
                                exerciseElement.classList.remove("active");
                            } catch {}
                            exerciseElement.classList.add("active");
                            exerciseElement.style.border = "3px solid red";
                        } else {
                            exerciseElement.classList.remove("active");
                            exerciseElement.style.border = "";
                            exerciseElement.innerText = "";
                        }


                    }

                }

            }
        }

        updateTopicTree()





    }

    startMyDayButton.addEventListener("click", insertTopicInputIntoTree);
}


let addDayButton = document.getElementById("addDayButton");
addDayButton.addEventListener("click", createForm)