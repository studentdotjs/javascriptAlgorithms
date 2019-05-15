function nElementsFromArr(arr, n) {
    let newArr = [];
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            newArr[i] = arr.pop();
        }
        newArr.reverse();
        console.log(newArr);
    } else {
        console.log(`${n} is 'Invalid' value because you have passed the value of 'n' more than the length of the array.`);
    }
}

nElementsFromArr([5, 1, 2], 2);
