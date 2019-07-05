let lastDigitsEqulas = function (num1, num2, num3) {
    let numToStr = [],
        multiply = 1;
    numToStr.push(num1.toString().split("").pop(), num2.toString().split("").pop(), num3.toString().split("").pop());

    for (let i = 0; i < numToStr.length - 1; i++) {
        multiply = multiply * numToStr[i];
        multiply = multiply.toString().split("").pop();
    }

    if (multiply === numToStr[2]) {
        console.log(true);
    } else {
        console.log(false);
    }
};

lastDigitsEqulas(25, 21, 125);
