let findPrimorial = function (n) {
    let primeCount = 0,
        nPrimorial = 1,
        intCheck = 2;

    while (primeCount !== n) {
        let i = null;

        for (i = 2; i < intCheck; i++) {
            if (intCheck % i === 0) {
                break;
            }
        }

        if (intCheck === i) {
            primeCount++;
            nPrimorial = nPrimorial * intCheck;
        }

        intCheck++;

    }

    console.log(nPrimorial);

};

findPrimorial(7);
