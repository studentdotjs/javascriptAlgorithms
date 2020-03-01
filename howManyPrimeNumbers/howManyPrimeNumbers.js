let totalPrimes = function (int) {
    let totalPrimes = 0,
        currentNum = 2;

    for (let i = 2; currentNum <= int;) {
        if (currentNum % i === 0) {
            if (i === currentNum) {
                totalPrimes++;
            }

            i = 2;
            currentNum++;

        } else {
            i++;
        }
    }

    console.log(`Total prime numbers upto ${int} are ${totalPrimes}.`);

};

totalPrimes(1000);
