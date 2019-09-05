let makePairs = function (intArr) {
    let pairArrays = [],
        length = Math.ceil(intArr.length / 2);

    for (let i = 0; i < length; i++) {
        pairArrays[[i]] = [intArr[i], intArr.pop()];
    }

    console.log(pairArrays);

};

makePairs([10, 58, 42, 02, 09, 20, 19]);
