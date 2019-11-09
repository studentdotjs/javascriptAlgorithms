let narcissisticNumberOrNot = function (number) {
    let numToStrSplit = String(number).split(""),
        numPower = numToStrSplit.length,
        answer = 0;

    numToStrSplit.forEach(function (number) {
        answer = Math.pow(number, numPower) + answer;
    });

    if (number === answer) {
        console.log(`${true}, ${number} is a narcissistic number.`);
    } else {
        console.log(`${false}, ${number} is not a narcissistic number.`);
    }

};

narcissisticNumberOrNot(153);
