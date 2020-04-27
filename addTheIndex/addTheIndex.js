let addIndexsToElements = function (intArr) {
    let newArr = intArr.map(function (int, i) {
        return int + i
    });

    console.log(newArr);

};

addIndexsToElements([7, 1, 3, 20, 28]);
