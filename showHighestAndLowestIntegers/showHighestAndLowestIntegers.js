let highandLowInt = function (intStr) {
    let answer = "",
        intStrSplit = intStr.split(" "),
        strToIntArr = [],
        highestInt = null,
        lowestInt = null;

    intStrSplit.forEach(function (int) {

        strToIntArr.push(Number(int));

    });

    highestInt = Math.max(...strToIntArr);

    lowestInt = Math.min(...strToIntArr);

    answer += highestInt + " " + lowestInt;

    console.log(answer);

};

highandLowInt("9 -41 23 -4 20 -10");
