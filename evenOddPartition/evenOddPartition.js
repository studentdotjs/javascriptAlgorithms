let evenOddIntSubArr = function (intArr) {
    let evenIntArr = [],
        oddIntArr = [],
        mixedIntArr = [];

    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] % 2 === 0) {
            evenIntArr.push(intArr[i]);
        } else {
            oddIntArr.push(intArr[i]);
        }
    }

    mixedIntArr.push(evenIntArr, oddIntArr);
    console.log(mixedIntArr);

};

evenOddIntSubArr([10, 37, 14, 09, 20, 19, 43]);
