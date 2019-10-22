let bothTrue = function (num1, num2) {

    if (num1 > 0 && num2 > 0) {
        console.log(`${true}, ${num1} and ${num2} both are greater then 0.`);
    } else if (num1 < 0 && num2 < 0) {
        console.log(`${true}, ${num1} and ${num2} both are less then 0.`);
    } else if (num1 === 0 && num2 === 0) {
        console.log(`${true}, ${num1} and ${num2} both are equal to 0.`);
    } else {
        console.log(false);
    }

};

bothTrue(11, 38);
