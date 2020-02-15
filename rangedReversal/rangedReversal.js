let rangedReversalArr = function (intArr, startIndex, endIndex) {
    let reversedArr = intArr.slice(startIndex, endIndex + 1),
        lengthReversedArr = reversedArr.length;

    intArr.splice(startIndex, lengthReversedArr);

    for (let i = 0; i < lengthReversedArr; i++) {
        intArr.splice(startIndex, 0, reversedArr[i]);
    }

    console.log(`After reversing integers from index ${startIndex} to ${endIndex} we have [${intArr}].`);

};

rangedReversalArr([13, 31, 17, 11, 20, 19, 41], 2, 5);
