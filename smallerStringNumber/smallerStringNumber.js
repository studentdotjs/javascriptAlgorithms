function findSmalllerNum(num1, num2) {
    let convertedNum1 = parseInt(num1);
    let convertedNum2 = parseInt(num2);
    if (convertedNum1 <= convertedNum2) {
        if (convertedNum1 === convertedNum2) {
            console.log(`'${num1}' and '${num2}' both numbers are equal. Therefore as smaller number we have '${num1}'.`);
            console.log(`The typeof '${num1}' is ${typeof num1}.`);
        } else {
            console.log(`'${num1}' is smaller than '${num2}'.`);
            console.log(`The typeof '${num1}' is ${typeof num1}.`);
        }
    } else {
        console.log(`'${num2}' is smaller than '${num1}'.`);
        console.log(`The typeof '${num2}' is ${typeof num2}.`);
    }
}

findSmalllerNum("22", "22");
