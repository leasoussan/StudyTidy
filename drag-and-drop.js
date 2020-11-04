let exerciseBoxes = document.getElementsByClassName("exercise");
for (box of exerciseBoxes) {
    box.setAttribute("draggable", "true");
    box.setAttribute("ondragstart", "dragStart(event)");

}
let targetBoxes = document.getElementsByClassName("drop-box");
for (targetBox of targetBoxes) {
    targetBox.setAttribute("ondragover", "allowDrop(event)");
    targetBox.setAttribute("ondrop", "dragDrop(event)");
    targetBox.setAttribute("ondragenter", "hoverOver(event)");
    targetBox.setAttribute("ondragleave", "hoverOff(event)");

}

function allowDrop(event) {
    event.preventDefault()
    console.log("allowDrop")
}

function dragStart(event) {
    // setting id's because currently exercise boxes are without them. Probably wont be an issue when box generation is coded with automatic id creation, so will delete below for loop then
    for (let i = 0; i < exerciseBoxes.length; i++) {
        let box = exerciseBoxes[i];
        box.setAttribute("id", `box-${i+1}`);
    }
    // transfer the exercise id to dragDrop
    let exerciseID = event.target.id;
    event.dataTransfer.setData("id", exerciseID);
    console.log("dragStart, exerciseID transfer: ", exerciseID)
}

function dragDrop(event) {
    event.preventDefault()
    let boxBackgroundColor = event.target.style.backgroundColor;
    console.log("boxBackgroundColor: ", event.target);
    let id = event.dataTransfer.getData("id");
    let exerciseID = document.getElementById(id);
    console.log(`3px solid ${boxBackgroundColor}`)
    exerciseID.style.border = `3px solid ${boxBackgroundColor}`;
    console.log("dragDrop, exerciseID: ", exerciseID);
    event.target.classList.remove('over');
}

function hoverOver(event) {
    event.target.classList.add('over');
    console.log("hoverOver")

}

function hoverOff(event) {
    event.target.classList.remove('over');
    console.log("hoverOff")

}