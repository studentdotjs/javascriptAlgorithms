let moveAllOneTypeToEnd = function (arr, element) {
    let newArr = null,
        oneTypeArr = [];

    newArr = arr.filter(function (value) {
        if (value !== element) {
            return value;
        } else {
            oneTypeArr.push(element);
        }
    });

    newArr = newArr.concat(oneTypeArr);
    console.log(`After moving all ${element}'s to the end of the [${arr}] array we have [${newArr}].`);

};

moveAllOneTypeToEnd([9, 52, 13, 11, 20, 9], 9);
