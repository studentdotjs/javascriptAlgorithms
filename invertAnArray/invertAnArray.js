const invertArr = (numArr) => {

    const invertedArr = [];

    if (numArr.length > 0) {

        numArr.forEach(function (num) {

            num > 0 ? invertedArr.push(0 - num) : invertedArr.push(Math.abs(num));

        });

    }

    console.log(invertedArr);

};

invertArr([10, -43, 2, 4, -2021]);
