let howManyProgressDays = function (milesArr) {
    let progressDays = 0;

    for (let i = 0; i < milesArr.length - 1; i++) {
        if (milesArr[i + 1] > milesArr[i]) {
            progressDays++;
        }
    }

    console.log(`Total number of progress days are ${progressDays}.`);

};

howManyProgressDays([5, 2, 5, 10, 11, 7, 20]);
