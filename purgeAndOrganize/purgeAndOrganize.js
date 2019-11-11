let uniqueArrSort = function (arr) {
    let uniqueSortedArr = [];

    arr.forEach(function (value) {
        if (uniqueSortedArr.indexOf(value) === -1) {
            uniqueSortedArr.push(value);
        }
    });

    uniqueSortedArr.sort(function (a, b) {
        return a - b;
    });

    console.log(`After remvoing all duplicate numbers and sorted as ascending order [${arr}] array, we have [${uniqueSortedArr}].`);

};

uniqueArrSort([17, 47, 1, 11, 20, 19, 17, 1, 11, 20]);
