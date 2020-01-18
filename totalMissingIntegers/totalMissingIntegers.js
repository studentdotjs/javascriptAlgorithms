let totalMissingIntegers = function (arr) {
    let filteredArr = [];

    arr.forEach(function (element) {
        if (isNaN(element) === false) {
            filteredArr.push(parseInt(element));
        }
    });

    let maxInt = Math.max(...filteredArr),
        minInt = Math.min(...filteredArr),
        intArr = [],
        totalMissingInts = 0;

    for (let i = minInt; i <= maxInt; i++) {
        intArr.push(i);
    }

    intArr.forEach(function (int) {
        if (filteredArr.indexOf(int) === -1) {
            totalMissingInts++;
        }
    });

    console.log(totalMissingInts);
};

totalMissingIntegers(["6", "12", "monday", "20", "13"]);
