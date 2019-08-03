let evenOddTransformNTimes = function (intArray, times) {
    let transformedIntArray = [];

    for (let i = 0; i < intArray.length; i++) {

        if (intArray[i] % 2 === 0) {
            transformedIntArray[i] = intArray[i] - times * 2;
        } else {
            transformedIntArray[i] = intArray[i] + times * 2;
        }
    }

    console.log(`After transforming [${intArray}]'s Even elememnts Down ${times} times and Odd elemnets Up ${times} times we have [${transformedIntArray}].'`);

};

evenOddTransformNTimes([17, 08, 01, 20, 19, 9, 10], 5);
