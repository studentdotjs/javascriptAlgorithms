let evenOrOddFactorsGroup = function (number) {
    let factorsCounter = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factorsCounter++;
        }
    }

    if (factorsCounter % 2 === 0) {
        console.log(`${number} has 'Even Number' of factors.`);
    } else {
        console.log(`${number} has 'Odd Number' of factors.`);
    }

};

evenOrOddFactorsGroup(14);
