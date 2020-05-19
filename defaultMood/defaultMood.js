let moodToday = function (mood) {
    let todaysMood = null;

    if (typeof mood === "string") {
        todaysMood = `Today I am Feeling ${mood}.`;
    } else {
        todaysMood = `Today I am Feeling Neutral.`;
    }

    console.log(todaysMood);

};

moodToday("Happy");
