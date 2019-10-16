let advancedArrSort = function (arr) {
    let advancedArr = [],
        pushedValue = [];

    for (let i = 0; i < arr.length; i++) {
        let currentValueIndex = arr.indexOf(arr[i]),
            currentValueSubArr = [];

        if (pushedValue.indexOf(arr[i]) === -1) {

            while (currentValueIndex !== -1) {
                currentValueSubArr.push(arr[i]);
                currentValueIndex = arr.indexOf(arr[i], currentValueIndex + 1);
            }

            advancedArr.push(currentValueSubArr);
            currentValueSubArr = [];

        }

        pushedValue.push(arr[i]);

    }

    console.log(advancedArr);

};

advancedArrSort([23, 43, 23, 26, 43, 26, 26]);
