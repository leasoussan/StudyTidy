function appendDayToWeeksProgressBar() {
    let weekContainers = document.getElementsByClassName("weekContainer")
    let arrayOfWeekScores = []
    for (week of weekContainers) {
        let topicContainers = week.getElementsByClassName("topicContainer")
        let weekScores = 0
        for (topic of topicContainers) {
            
            let dailyExercises = topic.getElementsByClassName("exercise")

            let numberOfExercisesWithContent = 0
            let dailyExerciseLoad = 0;
            // console.log(dailyExercises)
            for (let i = 0; i < dailyExercises.length; i++) {
                // console.log("looped Exercices")
                let currentExercise = dailyExercises[i]

                if (currentExercise.style.borderColor == "red") {
                    // console.log("check for red")
                    dailyExerciseLoad += 0;
                    numberOfExercisesWithContent++;
                } else if (currentExercise.style.borderColor == "orange") {
                    // console.log("check for orange")
                    dailyExerciseLoad += 0.25;
                    numberOfExercisesWithContent++;

                } else if (currentExercise.style.borderColor == "yellow") {
                    // console.log("check for Yellow")
                    dailyExerciseLoad += 0.6;
                    numberOfExercisesWithContent++;

                } else if (currentExercise.style.borderColor == "green") {
                    // console.log("check for green")
                    dailyExerciseLoad += 1;
                    numberOfExercisesWithContent++;
                } else {
                    // console.log("called Else")
                }
            }
            let dailyScore = dailyExerciseLoad / numberOfExercisesWithContent
            console.log("daily Scores", dailyScore)

            weekScores += dailyScore
            console.log("console of week Scores",weekScores)
            
        }
        
        arrayOfWeekScores.push(weekScores/5)
        console.log("Array of Weeks Scores", arrayOfWeekScores)
    }
    console.log("array of week Score",arrayOfWeekScores)
}



appendDayToWeeksProgressBar()