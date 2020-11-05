let topicsObject = {
    "weekContainer-1": {
        "topicContainer-1-1": {
            "topicName": "HTML Basics",
            "exercises": {
                "Practice": "green",
                "XP": "red",
                "XP Gold": "yellow",
                "XP Ninja": "orange",
                "Mini-project": "green"
            },
            "notes": "some notes",
            "url": "www.google.com"
        },
        "topicContainer-1-2": {
            "topicName": "CSS Basics",
            "exercises": {
                "Practice": "red",
                "XP": "green",
                "Mini-project": "yellow"
            },
            "notes": "some notes",
            "url": "www.google.com"
        }
    },
    "weekContainer-2": {
        "topicContainer-2-1": {
            "topicName": "JavaScript Basics",
            "exercises": {
                "Practice": "red",
                "XP": "green",
                "XP Gold": "yellow",
                "XP Ninja": "orange",
                "Mini-project": "red"
            },
            "notes": "some notes",
            "url": "www.google.com"
        },
        "topicContainer-2-2": {
            "topicName": "JavaScript Basics",
            "exercises": {
                "Practice": "red",
                "XP": "green",
                "XP Gold": "yellow",
                "XP Ninja": "orange",
                "Mini-project": "red"
            },
            "notes": "some notes",
            "url": "www.google.com"
        }
    }
}



function populateExistingTopics(topicsObject) {
    let weekContainers = document.getElementsByClassName("weekContainer");

    // looping through weekContainers
    for (let i = 0; i < weekContainers.length; i++) {
        let weekContainer = weekContainers[i];
        let weekContainerID = weekContainer.id;
        console.log(weekContainerID);

        // locating the topics within the weekContainer (5 topics)
        let topicContainers = weekContainer.getElementsByClassName("topicContainer");

        // loop through topicContainers
        for (let i = 0; i < topicContainers.length; i++) {
            let currentTopicContainer = topicContainers[i];
            let currentTopicContainerID = currentTopicContainer.id;
            console.log(currentTopicContainerID);
            try {
                let historyName = topicsObject[weekContainerID][currentTopicContainerID]["topicName"];
                let historyExercises = topicsObject[weekContainerID][currentTopicContainerID]["exercises"];
                console.log(historyName);
                console.log(historyExercises);
            } catch {}


            //



        }
    }
}

populateExistingTopics(topicsObject);