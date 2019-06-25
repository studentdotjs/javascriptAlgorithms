let sumOfDigits = function (num1, num2) {
    let i = num1,
        splitNum1 = null,
        sumOfDigits = 0;
    while (i <= num2) {
        splitNum1 = i.toString().split("");
        for (let j = 0; j < splitNum1.length; j++) {
            sumOfDigits = sumOfDigits + parseInt(splitNum1[j]);
        }
        i++;
    }
    console.log(`From ${num1} to ${num2} the sum of digits is ${sumOfDigits}.`);
};

sumOfDigits(22, 26);
