let operationToGet24 = function (num1, num2) {
    let answer = null;

    if (num1 + num2 === 24) {
        console.log("Added");
    } else if (num1 - num2 === 24) {
        console.log("Subtracted");
    } else if (num1 * num2 === 24) {
        console.log("Multiplied");
    } else if (num1 / num2 === 24) {
        console.log("Divided");
    } else {
        console.log(answer);
    }

};

operationToGet24(51, 18);
