let transpose2DMatrix = function (twoDArr) {
    let transposeArr = [],
        outerLoopLength = twoDArr[0].length;

    for (let i = 0; i < outerLoopLength; i++) {
        let currentSubArr = [];

        for (let j = 0; j < twoDArr.length; j++) {
            currentSubArr.push(twoDArr[j][i]);
        }

        transposeArr.push(currentSubArr);

    }

    console.log(transposeArr);

};

transpose2DMatrix([
  [11, 29, 35],
  [19, 1, 20],
  [23, 30, 28]

]);
