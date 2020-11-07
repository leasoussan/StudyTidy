// make exercise elements and 4 boxes interactable
function addDragAndDropFunctionality() {
    let exerciseElements = document.getElementsByClassName("exercise");
    for (exercise of exerciseElements) {
        exercise.setAttribute("draggable", "true");
        exercise.setAttribute("ondragstart", "dragStart(event)");

    }
    let targetBoxes = document.getElementsByClassName("drop-box");
    for (targetBox of targetBoxes) {
        targetBox.setAttribute("ondragover", "allowDrop(event)");
        targetBox.setAttribute("ondrop", "dragDrop(event)");
        targetBox.setAttribute("ondragenter", "hoverOver(event)");
        targetBox.setAttribute("ondragleave", "hoverOff(event)");
    }
}



function allowDrop(event) {
    event.preventDefault()
}



function dragStart(event) {
    let exerciseBoxes = document.getElementsByClassName("exercise");

    // transfer the exercise id to dragDrop
    let exerciseID = event.target.id;
    event.dataTransfer.setData("id", exerciseID);
}


// change exercise color on drop into box and save changes to usersDatabase; recalculate progress bar
function dragDrop(event) {
    event.preventDefault();
    // get usersDatabase from localStorage and the username
    usersDatabase = retrieveUsersDatabase();
    user = document.getElementById("username").innerText;

    // id of one of the 4 boxes
    let boxID = event.target.id;
    // id of the exercise that was droppped
    let id = event.dataTransfer.getData("id");
    // exercise element
    let exercise = document.getElementById(id);
    // exercise ID
    let exerciseID = exercise.getAttribute("id");
    // reg to capture week and topic numbers (in "exerciseP_Practice_1_2" will capture 1 and 2 in an array)
    let reg = /\w+_(\d+)_(\d+)/;
    let weekNo = exerciseID.match(reg)[1];
    let topicNo = exerciseID.match(reg)[2];
    let weekID = `weekContainer_${weekNo}`;
    let topicID = `topicContainer_${weekNo}_${topicNo}`;
    // reg to capture exercise name (in "exerciseP_Practice_1_2" will capture "Practice")
    let exerciseNameReg = /(?<=exerciseP_)(\w+)(?=_\d+_\d+)/;
    let exerciseName = exerciseID.match(exerciseNameReg)[0];


    if (boxID == "drop-box-1") {
        exercise.style.border = "solid 3px";
        exercise.style.borderColor = `green`;
        exercise.style.backgroundColor = `rgba(0, 128, 0, 0.2)`;
        usersDatabase[user]["data"][weekID][topicID]["exercises"][exerciseName] = "green";
    } else if (boxID == "drop-box-2") {
        exercise.style.border = "solid 3px";
        exercise.style.borderColor = `yellow`;
        exercise.style.backgroundColor = `rgba(255, 255, 0, 0.2)`;
        usersDatabase[user]["data"][weekID][topicID]["exercises"][exerciseName] = "yellow";
    } else if (boxID == "drop-box-3") {
        exercise.style.border = "solid 3px";
        exercise.style.borderColor = `orange`;
        exercise.style.backgroundColor = `rgba(255, 165, 0, 0.2)`;
        usersDatabase[user]["data"][weekID][topicID]["exercises"][exerciseName] = "orange";
    } else if (boxID == "drop-box-4") {
        exercise.style.border = "solid 3px";
        exercise.style.borderColor = `red`;
        exercise.style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        usersDatabase[user]["data"][weekID][topicID]["exercises"][exerciseName] = "red";
    }

    event.target.classList.remove('over');
    saveUsersDatabase(usersDatabase);
    refreshWeekTree();
    calculateScoresForProgressBar();
}



function hoverOver(event) {
    event.target.classList.add('over');

}



function hoverOff(event) {
    event.target.classList.remove('over');

}