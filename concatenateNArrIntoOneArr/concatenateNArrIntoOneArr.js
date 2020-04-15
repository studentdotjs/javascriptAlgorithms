let concatNArrsIntoOne = function (...nArrs) {
    let spreadNArrs = [...nArrs],
        allInOneArr = [];

    spreadNArrs.forEach(function (arr) {

        arr.forEach(function (value) {
            allInOneArr.push(value);
        });

    });

    console.log(allInOneArr);

};

concatNArrsIntoOne([9, 25], [1, 3, 2020]);
