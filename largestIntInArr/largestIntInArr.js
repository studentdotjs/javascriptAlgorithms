let largestIntInArr = function (intArr) {
    let largestInt = null;

    for (let i = 0; i < intArr.length; i++) {
        if (largestInt > intArr[i]) {
            continue;
        } else {
            largestInt = intArr[i];
        }
    }

    console.log(`Largest integer in [${intArr}] is ${largestInt}.`);

};

largestIntInArr([18, 41, 04, 09, 20, 19]);
