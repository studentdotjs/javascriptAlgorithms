let calculateScores = function (nameInitialInstancesStr) {
    let scoresArr = [],
        nameInitialsArr = ["A", "B", "C"];

    for (let i = 0; i < nameInitialsArr.length; i++) {
        let currInitial = nameInitialsArr[i],
            currInitialIndex = nameInitialInstancesStr.indexOf(currInitial),
            currInitialTotal = 0;

        while (currInitialIndex !== -1) {
            currInitialTotal++;
            currInitialIndex = nameInitialInstancesStr.indexOf(currInitial, currInitialIndex + 1);
        }

        scoresArr.push(currInitialTotal);

    }

    console.log(`Total scores of Andy, Ben and Charlotte are [${scoresArr}].`);

};

calculateScores("BABABCCBAAB");
