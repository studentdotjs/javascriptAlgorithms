let arrOfSubarr = function (numArr, numItems, value) {
    let mainArr = [],
        subArr = [];

    for (let i = 0; i < numArr; i++) {
        for (let j = 0; j < numItems; j++) {
            subArr.push(value);
        }
        mainArr.push(subArr);
        subArr = [];
    }

    console.log(mainArr);

};

arrOfSubarr(7, 7, 19);
