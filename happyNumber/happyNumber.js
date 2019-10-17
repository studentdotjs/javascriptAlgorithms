let happyNumberOrNot = function (number) {
    let sumOfSquares, numCopy = number;

    while (sumOfSquares !== 1 && sumOfSquares !== 4) {
        let numToStr = String(number).split("");
        sumOfSquares = 0;

        for (let i = 0; i < numToStr.length; i++) {
            sumOfSquares = numToStr[i] * numToStr[i] + sumOfSquares;
        }

        number = sumOfSquares;

    }

    if (sumOfSquares === 1) {
        console.log(`${numCopy} is an happy number because ${numCopy} have 1 in its sequence.`);
    } else {
        console.log(`${numCopy} is an unhappy number because ${numCopy} have 4 in its sequence.`);
    }

};

happyNumberOrNot(23);
