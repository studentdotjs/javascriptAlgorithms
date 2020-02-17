let sortByNthChar = function (arr, n) {
    let newArr = [];

    let nCharsArr = arr.map(function (element) {
        return element.charAt(n - 1);
    });

    nCharsArr.sort();

    nCharsArr.forEach(function (char) {
        arr.forEach(function (element) {
            if (char === element.charAt(n - 1) && newArr.indexOf(element) === -1) {
                newArr.push(element);
            }
        });
    });

    console.log(`After sorting characters of [${arr}] elements according to the ${n} chracter we have [${newArr}].`);

};

sortByNthChar(['work', 'team', 'rock', 'crop'], 4);
