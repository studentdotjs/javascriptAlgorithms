let nextElementInSequence = function (intArr) {
    let difference = null,
        nextElement = null;

    if (intArr[0] >= 0) {
        difference = intArr[1] - intArr[0];
        nextElement = intArr[intArr.length - 1] + difference;
    } else {
        difference = intArr[0] - intArr[1];
        nextElement = intArr[intArr.length - 1] - difference;
    }

    console.log(nextElement);

};

nextElementInSequence([10, 20, 30, 40]);
