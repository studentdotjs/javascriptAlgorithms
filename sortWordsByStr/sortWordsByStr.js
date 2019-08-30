let sortByStr = function (strArr, str) {
    let newStrArr = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strArr.length; j++) {
            if (str[i] === strArr[j][0]) {
                newStrArr.push(strArr[j]);
            }
        }
    }

    console.log(`After sorting items of [${strArr}] according to "${str}" we have [${newStrArr}].`);

};

sortByStr(["javascript", "programming", "coding", "laptop"], "acbldpej");
