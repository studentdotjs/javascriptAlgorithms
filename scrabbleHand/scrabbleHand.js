let scrabbleTilesScore = function (scrabbleTilesArr) {
    let finalScore = 0;

    for (let i = 0; i < scrabbleTilesArr.length; i++) {
        finalScore = finalScore + scrabbleTilesArr[i].score;
    }

    console.log(`After summing up the score of each tile, the total score is ${finalScore}.`);

};

scrabbleTilesScore([{
        tile: "S",
        score: 7
  },
    {
        tile: "H",
        score: 19
  },
    {
        tile: "A",
        score: 23
  },
    {
        tile: "R",
        score: 26
  },
    {
        tile: "M",
        score: 96
  },
    {
        tile: "A",
        score: 11
  },
    {
        tile: "N",
        score: 08
  }
]);
