let sumOddNums = function (n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            answer = answer + i;
        }
    }

    console.log(answer);

};

sumOddNums(6);
