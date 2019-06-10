let filterStrFromArr = function (arr) {
    let numArr = arr.filter(function (value) {
        return Number.isInteger(value);
    })
    console.log(`After removing all string values from [${arr}] array we have [${numArr}].`);
};


filterStrFromArr([7, 'june', 2019, 'morning', 10, 07]);
