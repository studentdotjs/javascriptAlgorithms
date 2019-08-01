let isNumPrime = function (number) {
    let i;
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            break;
        }
    }

    if (i === number) {
        console.log(`True, ${number} is a prime number.`);
    } else {
        console.log(`False, ${number} is not a prime number.`);
    }

};

isNumPrime(28);
