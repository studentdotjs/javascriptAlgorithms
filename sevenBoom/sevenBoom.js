let is7InArrInt = function (intArr) {
    let sevenInInt = [];

    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i].toString().includes(7)) {
            sevenInInt.push(intArr[i]);
        }
    }

    if (sevenInInt.length > 0) {
        console.log(`Boom! there is 7 in the [${sevenInInt}] elements of [${intArr}] array.`)
    } else {
        console.log(`There is no 7 in the elements of [${intArr}] array.`)
    }

};

is7InArrInt([13, 45, 15, 09, 27, 19, 07]);
