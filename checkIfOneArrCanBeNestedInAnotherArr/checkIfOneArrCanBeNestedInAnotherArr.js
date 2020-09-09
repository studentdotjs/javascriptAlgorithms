let canNestOrNot = function (arr1, arr2) {
    let arr1Min = Math.min(...arr1),
        arr1Max = Math.max(...arr1),
        arr2Min = Math.min(...arr2),
        arr2Max = Math.max(...arr2);

    if (arr1Min > arr2Min && arr1Max < arr2Max) {

        console.log(true);

    } else {

        console.log(false);

    }

};

canNestOrNot([21, 36, 105, 50], [20, 160]);
