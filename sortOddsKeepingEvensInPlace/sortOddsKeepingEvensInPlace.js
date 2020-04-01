let sortOddsKeepEvens = function (intArr) {
    let sortedOdds = [],
        indexesOfEven = [];

    intArr.forEach(function (int, i) {
        int % 2 !== 0 ? sortedOdds.push(int) : indexesOfEven.push(i);
    });

    sortedOdds.sort(function (a, b) {
        return a - b;
    });

    indexesOfEven.forEach(function (index) {
        sortedOdds.splice(index, 0, intArr[index]);
    });

    console.log(`After sorting only odd numbers of [${intArr}] in ascending order we have [${sortedOdds}].`);

};

sortOddsKeepEvens([5, 2, 6, 6, 1, 4, 9, 3]);
