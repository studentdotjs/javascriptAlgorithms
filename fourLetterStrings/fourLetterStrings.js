let fourLettersStr = function (strArr) {
    let fourLettersStrArr = [];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length === 4) {
            fourLettersStrArr.push(strArr[i]);
        }
    }

    console.log(`Exactly 4 letters words in [${strArr}] array is [${fourLettersStrArr}].`);

};

fourLettersStr(["sunday", "five", "winter", "code", "work"]);
