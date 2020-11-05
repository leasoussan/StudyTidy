let startMyDayObject = {};

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



    // DATE INPUT
    //creating a div with date input
    let dateInputDiv = document.createElement("div");
    dateInputDiv.setAttribute("id", "dateInputDiv");

    let dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("class", "dateInput");
    dateInput.setAttribute("id", "dateInput-start");

    dateInputDiv.appendChild(dateInput);




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
    inputCollectionForm.appendChild(dateInputDiv);
    inputCollectionForm.appendChild(subjectInputDiv);
    inputCollectionForm.appendChild(checkboxesInputSection);
    inputCollectionForm.appendChild(urlInputDiv);
    inputCollectionForm.appendChild(notesInputLabelPairDiv);
    inputCollectionForm.appendChild(submitButton);

    // APPEND THE FORM TO A PARENT (function argument)
    parent.appendChild(inputCollectionForm);


    // FUNCTIONALITY TO COLLECT INPUT
    let startMyDayButton = document.getElementById("startingInputSubmitButton")

    function collectStartingInput(event) {
        event.preventDefault();

        // collect username
        let username = document.getElementById("username");
        startMyDayObject["username"] = username;

        // collect date input
        let dateInput = document.getElementById("dateInput-start")
        let dateInputValue = dateInput.value;
        startMyDayObject["date"] = dateInputValue;

        // collect subject input
        let subjectInput = document.getElementById("subjectInput-start");
        let subjectInputValue = subjectInput.value;
        startMyDayObject["subjectInput"] = subjectInputValue;

        // collect checkboxes input
        let checkboxes = document.getElementsByClassName("checkboxInput");
        let checkboxValues = [];
        for (checkbox of checkboxes) {
            checkboxValues.push(checkbox.checked);
        }
        startMyDayObject["checkboxValues"] = checkboxValues;

        // collect URL input
        let urlInput = document.getElementById("urlInput");
        let urlInputValue = urlInput.value;
        startMyDayObject["urlInputValue"] = urlInputValue;

        // collect notes input
        let notesInput = document.getElementById("notesInput");
        let notesInputValue = notesInput.value;
        startMyDayObject["notesInputValue"] = notesInputValue;

        console.log(startMyDayObject);
        parent.removeChild(inputCollectionForm);
    }

    startMyDayButton.addEventListener("click", collectStartingInput);
}


let addDayButton = document.getElementById("addDayButton");
addDayButton.addEventListener("click", createForm)