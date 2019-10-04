let selectiveArrReversal = function (arrInt, selectiveInt) {
    let selectiveReversedArr = [];

    if (selectiveInt > 0) {
        for (let i = 0; i < arrInt.length; i += selectiveInt) {
            selectiveReversedArr.push(arrInt.slice(i, i + selectiveInt).reverse());
        }

        selectiveReversedArr = selectiveReversedArr.flat();
        console.log(`Selectively reversed array is [${selectiveReversedArr}].`);

    } else {
        selectiveReversedArr = null;
        selectiveReversedArr = arrInt;

        console.log(`Selectively reverse number is ${selectiveInt}, that's why we have the original array [${selectiveReversedArr}].`);
    }

}

selectiveArrReversal([10, 34, 4, 10, 20, 19], 0);
