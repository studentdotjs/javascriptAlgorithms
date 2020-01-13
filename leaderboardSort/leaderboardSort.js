let trueLeaderBoard = function (userObjsArr) {
    let trueScoresArr = [],
        leaderBoardArr = [];

    userObjsArr.forEach(function (user, i) {
        let currentTrueScore = 0;
        currentTrueScore = user.reputation * 2 + user.score;
        trueScoresArr.push([currentTrueScore, i]);
    });

    trueScoresArr.sort(function (a, b) {
        return b[0] - a[0];
    });

    trueScoresArr.forEach(function (trueScoreArr, i) {
        leaderBoardArr.push(userObjsArr[trueScoreArr[1]]);
    });

    console.log(leaderBoardArr);

};

trueLeaderBoard([{
        name: "Naveen",
        score: 210,
        reputation: 45
  },
    {
        name: "Rajat",
        score: 250,
        reputation: 15
  },
    {
        name: "Priya",
        score: 300,
        reputation: 40
  },
]);
