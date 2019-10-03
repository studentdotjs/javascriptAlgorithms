let factorsOrNot = function (factorsArr, int) {
    let i;

    for (i = 0; i < factorsArr.length; i++) {
        if (int % factorsArr[i] === 0) {
            continue;
        } else {
            console.log(`false, all integers of [${factorsArr}] array are not the factors of ${int}.`);
            break;
        }
    }

    if (i === factorsArr.length) {
        console.log(`true, all integers of [${factorsArr}] array are the factors of ${int}.`);
    }

};

factorsOrNot([2, 4, 5, 10], 20);
