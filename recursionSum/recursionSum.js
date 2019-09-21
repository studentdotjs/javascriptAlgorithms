let firstNNaturalIntSum = function (n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(`Sum of first ${n} natural numbers is ${sum}.`);

};

firstNNaturalIntSum(9);
