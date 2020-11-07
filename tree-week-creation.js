function refreshWeekTree() {
    usersDatabase = retrieveUsersDatabase();
    clearWeekTree();
    createWeeks(usersDatabase);
    populateWeekTreeWithContent(usersDatabase[document.getElementById("username").innerText]["data"]);
    calculateScoresForProgressBar();
}

function clearWeekTree() {
    user = document.getElementById("username").innerText;
    weeks = usersDatabase[user]["weeks"];
    let parent = document.getElementById("weeks-container");

    for (let i = 0; i < weeks; i++) {
        try {
            parent.removeChild(parent.firstChild);
        } catch {}
    };

}

function createWeeks(usersDatabase) {
    user = document.getElementById("username").innerText;
    weeks = usersDatabase[user]["weeks"]
    let weeksContainer = document.getElementById("weeks-container");
    // create week containers for however many weeks the user has
    for (i = 0; i < weeks; i++) {
        // create week container
        let weekContainer = document.createElement("div");
        weekContainer.setAttribute("id", `weekContainer_${i+1}`);
        weekContainer.setAttribute("class", "weekContainer");
        // create week header div
        let weekHeaderDiv = document.createElement("div");
        weekHeaderDiv.setAttribute("id", `weekHeaderDiv_${i+1}`);
        weekHeaderDiv.setAttribute("class", "weekHeaderDiv");
        //create week header
        let weekHeader = document.createElement("h2");
        weekHeader.setAttribute("id", `weekHeader_${i+1}`);
        weekHeader.setAttribute("class", "weekHeader");
        weekHeader.innerText = `Week ${i+1}`;
        //append week header to week header div
        weekHeaderDiv.appendChild(weekHeader);
        //append week header div to week container
        weekContainer.appendChild(weekHeaderDiv);
        //append week container to weeks container
        weeksContainer.appendChild(weekContainer);
    }
    // create 5 empty topic containers
    let weekContainers = document.getElementsByClassName("weekContainer")

    // looping through week containers
    for (let weekNo = 0; weekNo < weekContainers.length; weekNo++) {
        let weeksContainer = weekContainers[weekNo];
        let topicsDiv = document.createElement("div");
        topicsDiv.setAttribute("id", `topicContainerDiv_${weekNo+1}`);
        topicsDiv.setAttribute("class", "topicContainerDiv");
        // looping through topic containers within the week container
        for (let topicNo = 0; topicNo < 5; topicNo++) {
            //create topic container
            let topicContainer = document.createElement("div");
            topicContainer.setAttribute("id", `topicContainer_${weekNo+1}_${topicNo+1}`);
            topicContainer.setAttribute("class", "topicContainer");

            //add the topic header
            let topicHeaderDiv = document.createElement("div");
            topicHeaderDiv.setAttribute("id", `topicHeaderDiv_${weekNo+1}_${topicNo+1}`);
            topicHeaderDiv.setAttribute("class", "topicHeaderDiv");
            let topicHeader = document.createElement("h3");
            topicHeader.setAttribute("id", `topicHeader_${weekNo+1}_${topicNo+1}`);
            topicHeader.setAttribute("class", "topicHeader");
            topicHeaderDiv.appendChild(topicHeader);

            topicContainer.appendChild(topicHeaderDiv);

            //add the 7 exercises
            let exercisesContainer = document.createElement("div");
            exercisesContainer.setAttribute("id", `exercisesContainer_${weekNo+1}_${topicNo+1}`)
            for (let i = 0; i < exerciseNames.length; i++) {

                let exerciseP = document.createElement("p");
                exerciseP.setAttribute("id", `exerciseP_${exerciseNames[i]}_${weekNo+1}_${topicNo+1}`)
                exerciseP.setAttribute("class", `exercise ${exerciseNames[i]}`);
                exerciseP.setAttribute("draggable", "true");
                exerciseP.setAttribute("ondragstart", "dragStart(event)");
                exercisesContainer.appendChild(exerciseP);
            }
            topicContainer.appendChild(exercisesContainer);
            topicsDiv.appendChild(topicContainer);
        }
        weeksContainer.appendChild(topicsDiv);
    }
}
















function populateWeekTreeWithContent(topicsObject) {
    let weekContainers = document.getElementsByClassName("weekContainer");

    // looping through weekContainers
    for (let i = 0; i < weekContainers.length; i++) {
        let weekContainer = weekContainers[i];
        let weekContainerID = weekContainer.id;

        // locating the topics within the weekContainer (5 topics)
        let topicContainers = weekContainer.getElementsByClassName("topicContainer");

        // loop through topicContainers
        for (let i = 0; i < topicContainers.length; i++) {
            // locate the current topic container and ID
            let currentTopicContainer = topicContainers[i];
            let currentTopicContainerID = currentTopicContainer.id;
            // if exists find the current topic container in the data object
            try {
                let topicName = topicsObject[weekContainerID][currentTopicContainerID]["topicName"];
                let exercises = topicsObject[weekContainerID][currentTopicContainerID]["exercises"];

                let link = topicsObject[weekContainerID][currentTopicContainerID]["url"];

                // topic text and button
                let topicHeader = currentTopicContainer.getElementsByClassName("topicHeader")[0];
                topicHeader.innerHTML = `Day ${i+1}: <a href="${link}" target="_blank" rel="noopener noreferrer">${topicName}</a>`;
                topicHeaderDiv = currentTopicContainer.getElementsByClassName("topicHeaderDiv")[0]
                addNotesButton(topicHeaderDiv);

                // loop through exercises and populate them
                let pElements = currentTopicContainer.getElementsByTagName("p");
                for (let i = 0; i < pElements.length; i++) {
                    let current_pElement = pElements[i];
                    let current_exerciseName = exerciseNames[i];
                    let borderColor = exercises[current_exerciseName];
                    if (typeof(borderColor) != "undefined") {
                        // setting exercise style
                        if (borderColor == "green") {
                            current_pElement.style.border = "solid 3px";
                            current_pElement.style.borderColor = `green`;
                            current_pElement.style.backgroundColor = `rgba(0, 128, 0, 0.2)`;
                        } else if (borderColor == "yellow") {
                            current_pElement.style.border = "solid 3px";
                            current_pElement.style.borderColor = `yellow`;
                            current_pElement.style.backgroundColor = `rgba(255, 255, 0, 0.2)`;
                        } else if (borderColor == "orange") {
                            current_pElement.style.border = "solid 3px";
                            current_pElement.style.borderColor = `orange`;
                            current_pElement.style.backgroundColor = `rgba(255, 165, 0, 0.2)`;
                        } else if (borderColor == "red") {
                            current_pElement.style.border = "solid 3px";
                            current_pElement.style.borderColor = `red`;
                            current_pElement.style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
                        }
                        // setting exercise name
                        current_pElement.innerText = current_exerciseName.replace("_", " ");
                        // setting exercise class to active
                        current_pElement.classList.add("active");
                    }
                }
            } catch {}
        }
    }
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