let sumOfEvensin2DMatrix = function (twoDMatrix) {
    let answer = 0;

    for (let i = 0; i < twoDMatrix.length; i++) {

        for (let j = 0; j < twoDMatrix[i].length; j++) {

            if (twoDMatrix[i][j] % 2 === 0) {
                answer = answer + twoDMatrix[i][j];
            }
        }
    }

    console.log(`Sum of all even elements of 2D Matrix is ${answer}.`);

};

sumOfEvensin2DMatrix([
  [26, 7, 19, 23],
  [27, 52, 02]
]);
