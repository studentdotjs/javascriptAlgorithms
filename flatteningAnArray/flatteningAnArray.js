let flattenArray = function (arrOfSubArr) {
    let flattenArr = [];

    for (let i = 0; i < arrOfSubArr.length; i++) {
        for (let j = 0; j < arrOfSubArr[i].length; j++) {
            flattenArr.push(arrOfSubArr[i][j]);
        }
    }

    console.log(`After flattening all sub - arrays into one array we have [${flattenArr}].`);

};

flattenArray([[16, 28], [5, 08, 20]]);
