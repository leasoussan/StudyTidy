// NOTE TO SELF: This function will activate whenever the page is 
// loaded (or user switches etc). It creates all the weeks, but creates
// only the topics that exist for the week
// It gets the data from an object that also has border colors (super important)


function createWeeks(weeks) {
    let weeksContainer = document.getElementById("weeks-container");
    // create week continers for however many weeks the user has
    for (let i = 0; i < weeks; i++) {
        // create week container
        let weekContainer = document.createElement("div");
        weekContainer.setAttribute("id", `weekContainer-${i+1}`);
        weekContainer.setAttribute("class", "weekContainer");
        // create week header div
        let weekHeaderDiv = document.createElement("div");
        weekHeaderDiv.setAttribute("id", `weekHeaderDiv-${i+1}`);
        weekHeaderDiv.setAttribute("class", "weekHeaderDiv");
        //create week header
        let weekHeader = document.createElement("h2");
        weekHeader.setAttribute("id", `weekHeader-${i+1}`);
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
        topicsDiv.setAttribute("id", `topicContainerDiv-${weekNo+1}`);
        topicsDiv.setAttribute("class", "topicContainerDiv");
        // looping through topic containers within the week container
        for (let topicNo = 0; topicNo < 5; topicNo++) {
            //create topic container
            let topicContainer = document.createElement("p");
            topicContainer.setAttribute("id", `topicContainer-${weekNo+1}-${topicNo+1}`);
            topicContainer.setAttribute("class", "topicContainer");
            topicContainer.setAttribute("draggable", "true");
            topicContainer.setAttribute("ondragstart", "dragStart(event)");
            //add the 7 exercises
            topicsDiv.appendChild(topicContainer);
        }
        weeksContainer.appendChild(topicsDiv);
    }
}