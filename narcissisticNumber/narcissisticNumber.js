// 11.07.2019 - Using Function Expression

let narcissisticNumberOrNot = function (number) {

    let numToStrSplit = String(number).split(""),
        numPower = numToStrSplit.length,
        answer = 0;

    numToStrSplit.forEach(function (number) {

        answer = Math.pow(number, numPower) + answer;

    });

    if (number === answer) {

        console.log(true);

    } else {

        console.log(false);

    }

};

narcissisticNumberOrNot(153);

// 05.02.2021 - Using Arrow Function

const checkNarcissisticNumber = (num) => {

    let numToStr = String(num).split(""),
        digitsSum = 0,
        answer = null;

    for (let i = 0; i < numToStr.length; i++) {

        let currMutiplication = 1;

        for (let j = 0; j < numToStr.length; j++) {

            currMutiplication = currMutiplication * Number(numToStr[i])
        }

        digitsSum = digitsSum + currMutiplication;

    }

    answer = digitsSum === num ? true : false;

    console.log(answer);

};

checkNarcissisticNumber(370);
