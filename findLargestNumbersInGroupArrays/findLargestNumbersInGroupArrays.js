let findLargestNumbers = function (numArr) {
    let largestNumbersArr = [];

    numArr.forEach(function (numArr) {
        let currentLargeNumber = Math.max(...numArr);
        largestNumbersArr.push(currentLargeNumber);
    });

    console.log(largestNumbersArr);

};

findLargestNumbers([
  [7, 1, 40],
  [19, 2, 20],
  [23, 26, 7]
]);
