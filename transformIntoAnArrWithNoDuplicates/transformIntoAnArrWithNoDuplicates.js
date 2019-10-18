let uniqueIntArr = function (intArr) {
    let uniqueArr = [];

    intArr.forEach(function (int) {
        if (uniqueArr.indexOf(int) === -1) {
            uniqueArr.push(int);
        }
    });

    console.log(`Unique values in the [${intArr}] array are [${uniqueArr}].`);

};

uniqueIntArr([23, 26, 7, 5, 23, 26, 5, 18]);
