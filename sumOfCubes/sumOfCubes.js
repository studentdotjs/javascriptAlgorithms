let sumOfCubes = function (numArr) {
    let sumCubes = 0;
    for (let i = 0; i < numArr.length; i++) {
        sumCubes = numArr[i] * numArr[i] * numArr[i] + sumCubes;
    }
    console.log(`The sum of cubes of [${numArr}] array's numbers elements is ${sumCubes}.`);
};

sumOfCubes([4, 6, 19]);
