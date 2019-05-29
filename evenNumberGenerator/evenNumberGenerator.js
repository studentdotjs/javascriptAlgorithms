function findEvenNumbers(number) {
    let evenNumberArr = [],
        j = 0;
    evenNumberArr[j];
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            evenNumberArr[j] = i;
            j++;
        }
    }
    console.log(`Even numbers from 1 to ${number} are [${evenNumberArr}].`);
}

findEvenNumbers(23);
