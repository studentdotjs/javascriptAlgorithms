let untilSingleDigit = function (int) {
    let intStrSplit = String(int).split(""),
        multiplyAnswer = 1,
        answer = 0;

    while (intStrSplit.length !== 1) {
        for (let i = 0; i < intStrSplit.length; i++) {
            multiplyAnswer = multiplyAnswer * intStrSplit[i];
        }

        answer++;

        if (String(multiplyAnswer).length > 1) {
            intStrSplit = String(multiplyAnswer).split("");
            multiplyAnswer = 1;
        } else {
            break;
        }
    }

    console.log(`Multiplicative persistence of ${int} is ${answer}.`);

};

untilSingleDigit(950);
