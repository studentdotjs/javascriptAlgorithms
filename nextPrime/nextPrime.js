let nextPrimeOrItself = function (int) {
    let i = null,
        intCopy = int;

    for (i = 2; i < int;) {
        if (int % i === 0) {
            int++;
            i = 2;
        } else {
            i++;
        }
    }

    if (int === intCopy) {
        console.log(`${intCopy} is itself a prime number.`);
    } else {
        console.log(`After ${intCopy} the next prime number is ${i}.`);
    }

};

nextPrimeOrItself(37);
