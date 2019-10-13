let oddishOrEvenishNum = function (int) {
    let intToStr = String(int).split(""),
        sum = 0;

    for (let i = 0; i < intToStr.length; i++) {
        sum = sum + parseInt(intToStr[i]);
    }

    if (sum % 2 === 0) {
        console.log(`${int} is a Evenish number, because the sum of ${int}'s digits is even (${sum}).`);
    } else {
        console.log(`${int} is a Oddish number, because the sum of ${int}'s digits is odd (${sum}).`);
    }

};

oddishOrEvenishNum(18);
