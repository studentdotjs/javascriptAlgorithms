function transformIntArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr[i] = arr[i] - 1;
        } else {
            newArr[i] = arr[i] + 1;
        }
    }
    console.log(`Transformed new array is [${newArr}].`);
}

transformIntArray([2, 2, 0, 8, 10]);
