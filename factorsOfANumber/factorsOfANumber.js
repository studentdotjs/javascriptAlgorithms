let factorsOfNumber = function (number) {
    let j = 0,
        factorsArr = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factorsArr[j] = i;
            j++;
        }
    }
    console.log(`All factors of ${number} are [${factorsArr}].`);
};

factorsOfNumber(22);
