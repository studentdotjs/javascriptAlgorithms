let reversedIntArr = function (int) {
    let intToStrSplit = String(int).split("").reverse(),
        reversedArr = [];

    intToStrSplit.forEach(function (digit) {

        reversedArr.push(parseInt(digit));

    });

    console.log(reversedArr);

};

reversedIntArr(52921042020);
