let isInRangeOrNot = function (number, rangeArr) {

    if (number >= rangeArr.min && number <= rangeArr.max) {
        console.log(`true, ${number} lies between range of ${rangeArr.min} and ${rangeArr.max}.`)
    } else {
        console.log(`false, ${number} not lies between range of ${rangeArr.min} and ${rangeArr.max}.`);
    }

};

isInRangeOrNot(16, {
    min: 7,
    max: 47
});
