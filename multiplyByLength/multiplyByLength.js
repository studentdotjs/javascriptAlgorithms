function multiplyArrElementsByLength(arr) {
    let multiplyArr = [];
    let arrLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
        multiplyArr[i] = arr[i] * arrLength;
    }
    console.log(`After multiplication of every element of [${arr}] array with amount of array elements which is ${arrLength}, we have new [${multiplyArr}] array.`);
}
multiplyArrElementsByLength([2, 50, 4, 48]);
