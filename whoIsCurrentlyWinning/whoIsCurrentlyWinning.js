let currentlyWinning = function (scoresArr) {
    let myCurrentScore = 0,
        oppCurrentScore = 0,
        winsArr = [];

    scoresArr.forEach(function (score, i) {
        if (i % 2 === 0) {
            myCurrentScore = myCurrentScore + score;
        } else {
            oppCurrentScore = oppCurrentScore + score;
        }

        if (i % 2 !== 0) {
            if (myCurrentScore > oppCurrentScore) {
                winsArr.push("Y");
            } else if (myCurrentScore === oppCurrentScore) {
                winsArr.push("T");
            } else {
                winsArr.push("O");
            }
        }

    });

    console.log(`Final list of scores is [${winsArr}].`);

};

currentlyWinning([7, 20, 32, 15, 20, 9]);
