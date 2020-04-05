let removeSurroundingDuplicateItems = function (sequencedStrOrArr) {
    let newArr = [];

    for (let i = 0; i < sequencedStrOrArr.length; i++) {
        if (sequencedStrOrArr[i] !== sequencedStrOrArr[i + 1]) {
            newArr.push(sequencedStrOrArr[i]);
        }
    }

    console.log(`After removing surrounding duplicate items we have [${newArr}].`);

};

removeSurroundingDuplicateItems("nnnnaaaviiiinnnn");
