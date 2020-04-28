let findNumberIndex = function (arr, value) {

    if (arr.includes(value)) {
        console.log(arr.indexOf(value));
    } else {
        console.log(-1);
    }

};

findNumberIndex([17, 8, 5, 2, 20], 8);
