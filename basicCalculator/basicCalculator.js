let basicCalculation = function (num1, operator, num2) {
    let answer = null;

    if (num2 > 0 || operator !== "/") {
        switch (operator) {
            case "+":
                answer = num1 + num2;
                console.log(`Answer is ${answer}.`);
                break;
            case "-":
                answer = num1 - num2;
                console.log(`Answer is ${answer}.`);
                break;
            case "*":
                answer = num1 * num2;
                console.log(`Answer is ${answer}.`);
                break;
            default:
                answer = num1 / num2;
                console.log(`Answer is ${answer}.`);
                break;
        }
    } else {
        console.log("Can't divide by 0!");
    }

};

basicCalculation(2, "/", 0);
