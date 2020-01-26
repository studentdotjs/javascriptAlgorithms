let merge2Arr = function (firstArr, secondArr) {
    let mergedArr = [],
        length = firstArr.length > secondArr.length ? firstArr.length : secondArr.length;

    for (let i = 0; i < length; i++) {
        mergedArr.push(firstArr[i], secondArr[i]);

        if (mergedArr.includes(undefined)) {
            mergedArr.splice(mergedArr.indexOf(undefined), 1);
        }

    }

    console.log(`After combining values of [${firstArr}] and [${secondArr}] alternatingly we have [${mergedArr}].`);

};

merge2Arr([6, 12, 26, 1, 20, 20], ['n', 'a', 'v', 'e', 'e', 'n']);
