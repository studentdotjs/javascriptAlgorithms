let amplify4 = function (number) {
    let j = 0,
        amplify4Arr = [];
    for (let i = 1; i <= number; i++) {
        if (i % 4 === 0) {
            amplify4Arr[j] = i * 10;
            j++;
        } else {
            amplify4Arr[j] = i;
            j++;
        }
    }
    console.log(`From 1 to ${number}, after amplifying the multiples of 4 by 10 : [${amplify4Arr}].`);
}

amplify4(23);
