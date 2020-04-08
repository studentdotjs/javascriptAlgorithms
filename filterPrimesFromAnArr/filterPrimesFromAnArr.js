let filterPrimeNums = function (intArr) {
    let primeInts = [];

    intArr.forEach(function (int) {
        let currentInt = int,
            divisior = 2;
        if (currentInt >= divisior) {
            while (divisior !== currentInt) {
                if (currentInt % divisior === 0) {
                    break;
                } else {
                    divisior++;
                }
            }
        }

        if (currentInt === divisior && primeInts.indexOf(currentInt) === -1) {
            primeInts.push(currentInt);
        }

    });

    console.log(`After filtering non - prime integers from [${intArr}] we have [${primeInts}] array.`);

};

filterPrimeNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
