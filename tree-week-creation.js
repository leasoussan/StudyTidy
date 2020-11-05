// NOTE TO SELF: This function will activate whenever the page is 
// loaded (or user switches etc). It creates all the weeks, but creates
// only the topics that exist for the week
// It gets the data from an object that also has border colors (super important)



//getting the number of week from the Database:

// let weeks = usersDatabase[user]["weeks"];



function createWeeks(weeks) {
    let weeksContainer = document.getElementById("weeks-container");
    // create week continers for however many weeks the user has
    for (let i = 0; i < weeks; i++) {
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
            let notesButton = document.createElement("button");
            notesButton.setAttribute("class", "noteButton_Button");
            notesButton.innerHTML = '<i class="fa fa-folder noteButton_i" id=' + `noteButton_${topicNo+1}` + '}></i>'
            topicHeaderDiv.appendChild(topicHeader);
            topicHeaderDiv.appendChild(notesButton);


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