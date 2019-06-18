let findMissingNumber = function (numberArr) {
    let missingNumber;
    for (let i = 1; i <= 10; i++) {
        if (numberArr.includes(i))
            continue;
        else {
            missingNumber = i;
            break;
        }
    }
    console.log(`From [${numberArr}] array missing number is ${missingNumber}.`);
};

findMissingNumber([6, 2, 7, 1, 9, 8, 10, 4, 5]);
