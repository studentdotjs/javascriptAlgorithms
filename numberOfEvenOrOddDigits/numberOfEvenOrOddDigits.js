let countOddOrEvenDigits = function (intArr, evenOrOdd) {
    let currentIntSplit = null,
        digitsCount = 0,
        digitsCountArr = [];

    intArr.forEach(function (int) {
        currentIntSplit = String(int).split("");

        currentIntSplit.forEach(function (digit) {
            if (evenOrOdd === "even") {
                if (digit % 2 === 0) {
                    digitsCount++;
                }
            } else {
                if (digit % 2 !== 0) {
                    digitsCount++;
                }
            }

        });

        digitsCountArr.push(digitsCount);
        digitsCount = 0;

    });

    console.log(`Number of "${evenOrOdd}" digits of [${intArr}] is [${digitsCountArr}].`);

};

countOddOrEvenDigits([22, 53, 99, 61, 777, 8], "even");
