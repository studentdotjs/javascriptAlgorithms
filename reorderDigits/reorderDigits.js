let reorderDigitsOfIntArr = function (intArr, order) {
    let newArr = [];

    if (order === "asc") {

        for (let i = 0; i < intArr.length; i++) {
            let currentValue = intArr[i];
            newArr[i] = parseInt(currentValue.toString().split("").sort().join(""));
        }

        console.log(`After reordring digits of [${intArr}] each interger in ascending order we have [${newArr}].`);

    } else {

        for (let j = 0; j < intArr.length; j++) {
            let currentValue = intArr[j];
            newArr[j] = parseInt(currentValue.toString().split("").sort(function (a, b) {
                return b - a
            }).join(""));
        }

        console.log(`After reordring digits of [${intArr}] each interger in decending order we have [${newArr}].`);

    }

};

reorderDigitsOfIntArr([635, 300, 820, 195], "dsc");
