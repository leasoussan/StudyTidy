// let notesButton = document.createElement("button");
// notesButton.setAttribute("class", "noteButton_Button");
// notesButton.innerHTML = '<i class="fa fa-folder noteButton_i" id=' + `noteButton_${topicNo+1}` + '}></i>'
// topicHeaderDiv.appendChild(notesButton);

// let topicNotesButton_Button = currentTopicContainer.getElementsByClassName("noteButton_Button")[0];
// topicNotesButton_Button.classList.add("active");
// let topicNotesButton_i = currentTopicContainer.getElementsByClassName("noteButton_i")[0];
// topicNotesButton_i.classList.add("active");



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


    function editTopicNotes(event) {
        let notesSectionElement = document.getElementsByClassName("notes_section")[0];
        let username = document.getElementById("username").innerText
        let regWeekNo = /(?<=topicHeaderDiv)(_\d+)/
        let weekID = "weekContainer" + topicHeaderDivID.match(regWeekNo)[0];
        let topicID = "topicContainer" + topicHeaderDivID.match(reg)[0];
        let userNotes = usersDatabase[username]["data"][weekID][topicID]["notes"]
        notesSectionElement.value = userNotes;

        let saveNotesButton = document.getElementById("saveNotesButton");

        function saveNotes(event) {
            console.log("saveNotes function activated");
            let notesToSave = notesSectionElement.value;
            console.log("notesToSave: ", notesToSave);
            usersDatabase[username]["data"][weekID][topicID]["notes"] = notesToSave
        }
        saveNotesButton.addEventListener("click", saveNotes)
    }

    notesButton.addEventListener("click", editTopicNotes)
}

function removeNotesButton(topicHeaderDiv) {
    let notesButtonElement = topicHeaderDiv.getElementsByClassName(noteButton_Button)[0]
    topicHeaderDiv.removeChild(notesButtonElement);
}