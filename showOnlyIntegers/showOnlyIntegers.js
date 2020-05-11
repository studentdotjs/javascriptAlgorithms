let onlyIntegers = function (arr) {
    let integersArr = [];

    arr.forEach(function (element) {
        if (Number.isInteger(element) === true) {
            integersArr.push(element);
        }
    });

    console.log(integersArr);

};

onlyIntegers([17, "friday", 21, "march", 20.55, "twenty", 1]);
