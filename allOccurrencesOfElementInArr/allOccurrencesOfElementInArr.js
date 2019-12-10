let allOccurrencesOfElement = function (arr, element) {
    let elementallOccurrencesArr = [];

    arr.forEach(function (current, i) {
        if (current === element) {
            elementallOccurrencesArr.push(i);
        }
    });

    console.log(`Indices of all occurrences of ${element} in the [${arr}] is [${elementallOccurrencesArr}].`);

};

allOccurrencesOfElement([13, 5, 15, 5, 70, 5, 12, 5], 5);
