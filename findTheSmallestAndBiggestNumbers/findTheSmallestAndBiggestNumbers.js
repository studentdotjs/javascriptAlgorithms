let findMinAndMaxNumbers = function (numArr) {
    let minAndMaxArr = [],
        minNum = minAndMaxArr.push(Math.min(...numArr)),
        maxNum = minAndMaxArr.push(Math.max(...numArr));

    minAndMaxArr.sort(function (a, b) {
        return a - b;
    });

    console.log(minAndMaxArr);

};

findMinAndMaxNumbers([4, 41, 14, 20, 36]);
