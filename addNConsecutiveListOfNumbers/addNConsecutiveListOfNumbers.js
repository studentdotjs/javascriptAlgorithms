let consecutiveSum = function (n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    console.log(sum);

};

consecutiveSum(56);
