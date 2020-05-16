let getHalfQuarterAndEighthOfNum = function (n) {
    let halfQuarterEighthArr = [];

    for (let i = 2; i <= 8; i *= 2) {
        halfQuarterEighthArr.push(n / i);
    }

    console.log(halfQuarterEighthArr);

};

getHalfQuarterAndEighthOfNum(18);
