let numFactorial = function (number) {
    let intFactorial = 1;
    for (let i = 1; i <= number; i++) {
        intFactorial = intFactorial * i;
    }
    console.log(`Factorial of ${number} is ${intFactorial}.`);
};

numFactorial(10);
