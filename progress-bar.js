// populate the progress bar with colorless elements according week number as stated in the usersDatabase
function createProgressBarElements() {
    usersDatabase = retrieveUsersDatabase();
    user = document.getElementById("username").innerText
    let weeks = usersDatabase[user]["weeks"]
    let childrenArray = [];
    for (let i = 0; i < weeks; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "progress-bar-element");
        childrenArray = childrenArray.concat([box]);
    }
    let parent = document.getElementById("progress-bar");
    for (let i = 0; i < childrenArray.length; i++) {
        let child = childrenArray[i];
        let widthPerc = 1 / (weeks)
        widthPerc = Math.round(widthPerc * 100, 0);
        child.style.width = `${widthPerc}%`;
        child.style.heigth = "95%";
        child.setAttribute("id", `progress-bar-element-${i+1}`)
        child.innerText = `Week ${i+1}`;
        child.style.fontSize = "14px";
        parent.appendChild(child);
    }
}





// make progress bar elements clickable, calling function scrollToWeekElementInTree
function makeProgressBarWeeksClickable() {
    let progressBarWeekElements = document.getElementsByClassName("progress-bar-element");
    for (element of progressBarWeekElements) {
        element.addEventListener("click", scrollToWeekElementInTree);
        element.style.cursor = "pointer";
    }
}





// scroll to week in tree with click on progress bar element
function scrollToWeekElementInTree(event) {
    let progressBarWeekElementID = event.target.id;
    let reg = /(?<=-)(\d+)/
    let weekID = progressBarWeekElementID.match(reg)[0];
    let weekContainer = document.getElementById(`weekContainer_${weekID}`);
    weekContainer.scrollIntoView({ behavior: "smooth" });
}





// set color for progress bar elements according colors in topic tree
function calculateScoresForProgressBar() {
    let weekContainers = document.getElementsByClassName("weekContainer")
    let arrayOfweekScores = []

    // looping through week containers
    for (week of weekContainers) {
        let topicContainers = week.getElementsByClassName("topicContainer")
        let topicScores = []

        // looping through topic containers
        for (topic of topicContainers) {
            let exerciseElements = topic.getElementsByClassName("exercise")
            let numberOfExercisesWithContent = 0
            let topicScore = 0;

            // looping through exercise elements and collecting scores
            for (let i = 0; i < exerciseElements.length; i++) {
                let currentExercise = exerciseElements[i]

                if (currentExercise.style.borderColor == "red") {
                    topicScore += 0;
                    numberOfExercisesWithContent++;
                } else if (currentExercise.style.borderColor == "orange") {
                    topicScore += 0.25;
                    numberOfExercisesWithContent++;

                } else if (currentExercise.style.borderColor == "yellow") {
                    topicScore += 0.6;
                    numberOfExercisesWithContent++;

                } else if (currentExercise.style.borderColor == "green") {
                    topicScore += 1;
                    numberOfExercisesWithContent++;
                } else {}
            }

            // replacing NaN values with 0
            let topicScorePercentage = topicScore / numberOfExercisesWithContent
            if (topicScorePercentage != topicScorePercentage) {
                topicScorePercentage = 0;
            }
            topicScores.push(topicScorePercentage);
        }
        // Week average calculation
        // computing the sum for the week
        let weekSum = 0;
        for (topic of topicScores) {
            weekSum += topic;
        }
        // computing the average for the week
        let weekAverage = weekSum / topicScores.length;
        arrayOfweekScores.push(weekAverage);
    }

    // assigning background style for the progressbar in increments of 10% (red-yellow-green gradient)
    let progressBarElements = document.getElementsByClassName("progress-bar-element");
    for (let i = 0; i < arrayOfweekScores.length; i++) {
        let currentBarElement = progressBarElements[i];
        let currentBarPercentage = arrayOfweekScores[i];
        // console.log(currentBarPercentage);
        if (currentBarPercentage < 0.1) {
            currentBarElement.style.backgroundColor = "#E50000";
        } else if ((currentBarPercentage >= 0.1) && (currentBarPercentage < 0.2)) {
            currentBarElement.style.backgroundColor = "#DE2900";
        } else if ((currentBarPercentage >= 0.2) && (currentBarPercentage < 0.3)) {
            currentBarElement.style.backgroundColor = "#D74F01";
        } else if ((currentBarPercentage >= 0.3) && (currentBarPercentage < 0.4)) {
            currentBarElement.style.backgroundColor = "#D17301";
        } else if ((currentBarPercentage >= 0.4) && (currentBarPercentage < 0.5)) {
            currentBarElement.style.backgroundColor = "#CA9402";
        } else if ((currentBarPercentage >= 0.5) && (currentBarPercentage < 0.6)) {
            currentBarElement.style.backgroundColor = "#C4B203";
        } else if ((currentBarPercentage >= 0.6) && (currentBarPercentage < 0.7)) {
            currentBarElement.style.backgroundColor = "#ABBD03";
        } else if ((currentBarPercentage >= 0.7) && (currentBarPercentage < 0.8)) {
            currentBarElement.style.backgroundColor = "#85B603";
        } else if ((currentBarPercentage >= 0.8) && (currentBarPercentage < 0.9)) {
            currentBarElement.style.backgroundColor = "#61B004";
        } else if ((currentBarPercentage >= 0.8) && (currentBarPercentage < 0.9)) {
            currentBarElement.style.backgroundColor = "#3FA904";
        } else {
            currentBarElement.style.backgroundColor = "#21A205"
        }
    }
}