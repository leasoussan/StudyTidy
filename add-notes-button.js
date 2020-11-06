function addNotesButton(topicHeaderDiv) {
    let topicHeaderDivID = topicHeaderDiv.getAttribute("id");
    let reg = /(?<=topicHeaderDiv)(\w+)/;
    // get nums from the id (e.g. "topicHeaderDiv_2_5" --> "_2_5")
    let ID_nums = topicHeaderDivID.match(reg)[0]
    let notesButton = document.createElement("button");
    notesButton.setAttribute("class", "noteButton");
    notesButton.setAttribute("id", `noteButton${ID_nums}`);
    // notesButton.setAttribute("onclick", "editTopicNotes(event)")
    notesButton.innerText = "Notes"
    topicHeaderDiv.appendChild(notesButton)

    notesButton.addEventListener("click", notesButtonClick)

}

function notesButtonClick(event) {
    event.preventDefault();
    console.log("event: ", event);
    let buttonID = event.target.id;
    let buttonElement = document.getElementById(buttonID);
    buttonElement.classList.add("notesButtonActivated");
    let reg = /(?<=noteButton_)(\d+)_(\d+)/
    let weekNum = buttonID.match(reg)[1];
    let topicNum = buttonID.match(reg)[2];
    // present notes on text area
    let notesSectionElement = document.getElementsByClassName("notes_section")[0];
    let username = document.getElementById("username").innerText;
    let weekID = `weekContainer_${weekNum}`;
    let topicID = `topicContainer_${weekNum}_${topicNum}`;
    let userNotes = usersDatabase[username]["data"][weekID][topicID]["notes"]
    notesSectionElement.value = userNotes;
    // add event listener to save notes button
    let saveNotesButton = document.getElementById("saveNotesButton");
    saveNotesButton.addEventListener("click", saveNotesButtonClick);
}


function saveNotesButtonClick(event) {
    event.preventDefault();
    let notesButtonElement = document.getElementsByClassName("notesButtonActivated")[0];
    console.log("notesButtonElement: ", notesButtonElement);
    let notesButtonID = notesButtonElement.getAttribute("id");
    let reg = /(?<=noteButton_)(\d+)_(\d+)/
    let weekNum = notesButtonID.match(reg)[1];
    let topicNum = notesButtonID.match(reg)[2];
    let username = document.getElementById("username").innerText;
    let weekID = `weekContainer_${weekNum}`;
    let topicID = `topicContainer_${weekNum}_${topicNum}`;
    let saveNotesButton = document.getElementById("saveNotesButton");
    let notesSectionElement = document.getElementsByClassName("notes_section")[0];
    let notesToSave = notesSectionElement.value;
    usersDatabase[username]["data"][weekID][topicID]["notes"] = notesToSave;
    saveNotesButton.removeEventListener("click", saveNotesButtonClick);
    notesButtonElement.classList.remove("notesButtonActivated");
}


function removeNotesButton(topicHeaderDiv) {
    let notesButtonElement = topicHeaderDiv.getElementsByClassName(noteButton_Button)[0];
    notesButtonElement.removeEventListener(notesButtonClick);
    topicHeaderDiv.removeChild(notesButtonElement);
}