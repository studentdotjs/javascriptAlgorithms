function reminaderArr(intArr, n) {
    let newIntArr = [];

    for (let i = 0; i < intArr.length; i++) {
        newIntArr.push(intArr[i] % n);
    }

    console.log(`After dividing each number of [${intArr}] array to ${n} we have [${newIntArr}] remainder array.`);

}

reminaderArr([11, 07, 26, 08, 20], 19)
