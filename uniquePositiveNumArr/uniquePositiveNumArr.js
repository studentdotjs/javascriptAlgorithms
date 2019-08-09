let uniqueNumArr = function (intnumberArr) {
    let uniquenumberArray = [];

    for (let i = 0; i < intnumberArr.length; i++) {
        if (intnumberArr[i] > 0 && uniquenumberArray.indexOf(intnumberArr[i]) === -1) {
            uniquenumberArray.push(intnumberArr[i]);
        }
    }

    console.log(`Unique positive numbers in [${intnumberArr}] are [${uniquenumberArray}].`);

};

uniqueNumArr([8, 8, -20, 19, -10, -4, 7, 50]);
