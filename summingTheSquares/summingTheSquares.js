let nSquaresSum = function (n) {
    let squaresSum = 0;

    for (let i = 1; i <= n; i++) {
        squaresSum = squaresSum + Math.pow(i, 2);
    }

    console.log(squaresSum);

};

nSquaresSum(99);
