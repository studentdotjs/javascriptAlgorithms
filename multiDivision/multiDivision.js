let multiDivison = function (int, n, divisor) {
    let i = 0;

    while (i !== n) {
        int = int + int;
        i++;
    }

    if (int % divisor === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

};

multiDivison(6, 3, 18);
