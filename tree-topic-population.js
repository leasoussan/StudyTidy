// let user = document.getElementById("username").innerText;

let topicsObject = usersDatabase[user]["data"];


function populateExistingTopics(topicsObject) {
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
                    let current_pEelement = pElements[i];
                    let current_exerciseName = exerciseNames[i];
                    let borderColor = exercises[current_exerciseName];
                    if (typeof(borderColor) != "undefined") {
                        // setting exercise border style
                        current_pEelement.style.border = `solid 3px ${borderColor}`;
                        // setting exercise name
                        current_pEelement.innerText = current_exerciseName;
                        // setting exercise class to active
                        current_pEelement.classList.add("active");
                    }
                }
            } catch {}
        }
    }
}

populateExistingTopics(topicsObject);