let totalHalveCount = function (int1, int2) {
    let halveCounter = 0,
        currentHalve = int1 / 2;

    while (currentHalve > int2) {
        halveCounter++;
        currentHalve = currentHalve / 2;
    }

    console.log(`${halveCounter} times ${int1} can be halved while still being greater than ${int2}.`);

};

totalHalveCount(56, 4);
