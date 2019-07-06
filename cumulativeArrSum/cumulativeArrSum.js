let cumulativeAdd = function (numberArr) {
    let cumulativeTotal = [],
        placeholder = 0;

    for (let i = 0; i < numberArr.length; i++) {
        placeholder = placeholder + numberArr[i];
        cumulativeTotal.push(placeholder);
    }

    console.log(`Cumulative array sum of [${numberArr}] array is [${cumulativeTotal}].`);
};

cumulativeAdd([5, 7, 19, 10, 50]);
