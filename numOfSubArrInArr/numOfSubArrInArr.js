let numberOfSubbarrays = function (arrayOfSubArr) {
    let totalSubArr = 0,
        i = 0,
        j = 0;

    while (i < arrayOfSubArr.length) {
        if (arrayOfSubArr[i][j] === undefined) {
            break;
        } else {
            i++;
        }
    }

    totalSubArr = i;
    console.log(`There are total ${totalSubArr} sub - arrays.`);

};

numberOfSubbarrays([[16, 23], [4, 08, 20], [19, 22, 3]]);
