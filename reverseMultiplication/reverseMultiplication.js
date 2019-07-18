let reverseMultiplication = function (number) {
    let numToStr = number.toString().split(""),
        reverseProduct = 1;

    for (let i = 0; i < numToStr.length; i++) {
        reverseProduct = reverseProduct * numToStr[i];
    }

    console.log(`Reverse multiplication of digits of ${number} is ${reverseProduct}.`);
};

reverseMultiplication(26);
