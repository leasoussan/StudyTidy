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

            // looping through exercise elements
            for (let i = 0; i < exerciseElements.length; i++) {
                // console.log("looped Exercices")
                let currentExercise = exerciseElements[i]

                if (currentExercise.style.borderColor == "red") {
                    // console.log("check for red")
                    topicScore += 0;
                    numberOfExercisesWithContent++;
                } else if (currentExercise.style.borderColor == "orange") {
                    // console.log("check for orange")
                    topicScore += 0.25;
                    numberOfExercisesWithContent++;

                } else if (currentExercise.style.borderColor == "yellow") {
                    // console.log("check for Yellow")
                    topicScore += 0.6;
                    numberOfExercisesWithContent++;

                } else if (currentExercise.style.borderColor == "green") {
                    // console.log("check for green")
                    topicScore += 1;
                    numberOfExercisesWithContent++;
                } else {
                    // console.log("called Else")
                }
            }
            let topicScorePercentage = topicScore / numberOfExercisesWithContent
            if (topicScorePercentage != topicScorePercentage) {
                topicScorePercentage = 0;
            }
            topicScores.push(topicScorePercentage);
        }
        let weekSum = 0;
        for (topic of topicScores) {
            weekSum += topic;
        }
        let weekAverage = weekSum / topicScores.length;
        arrayOfweekScores.push(weekAverage);
    }
    // assigning background style for the progressbar
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
    // console.log("reassigned progress bar colors")
}