let progressBar = document.getElementById("progress-bar");

// only for testing, delete later
let weeks = 15;

function generateProgressBarElements(weeks) {
    let childrenToAppendToParent = [];
    for (let i = 0; i < weeks; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "progress-bar-element");
        childrenToAppendToParent = childrenToAppendToParent.concat([box]);
    }
    return childrenToAppendToParent

}

let progressBarElementArray = generateProgressBarElements(weeks)


function appendChildrenToProgressBar(childrenArray, weeks) {
    let parent = document.getElementById("progress-bar")
    for (let i = 0; i < childrenArray.length; i++) {
        let child = childrenArray[i];
        let widthPerc = 1 / (weeks)
        widthPerc = Math.round(widthPerc * 100, 0);
        child.style.width = `${widthPerc}%`;
        child.setAttribute("id", `progress-bar-element-${i+1}`)
        child.innerText = `Wk${i+1}`
        parent.appendChild(child);
    }
}

appendChildrenToProgressBar(progressBarElementArray, weeks);