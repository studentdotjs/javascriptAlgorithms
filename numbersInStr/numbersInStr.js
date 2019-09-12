let findAlphanumericStr = function (strArr) {
    let alphanumericStrArr = [];

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr[i].length; j++) {
            if (parseInt(strArr[i][j]) * 1 == strArr[i][j]) {
                alphanumericStrArr.push(strArr[i]);
                break;
            }
        }
    }

    console.log(`Alphanumeric strings in the [${strArr}] array are [${alphanumericStrArr}].`);

};

findAlphanumericStr(["naveen23", "1996birth", "jaipur", "rajasthan"]);
