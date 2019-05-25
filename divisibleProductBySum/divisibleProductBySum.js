function divisibleProductBySum(arr) {
    let product = 1,
        sum = 0;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];
        sum = sum + arr[i];
    }
    if (product % sum === 0) {
        console.log(`Product of [${arr}] array is ${product}, which is divisible by sum of [${arr}] array elements which is ${sum}.`);
    } else {
        console.log(`Product of [${arr}] array is ${product}, which is not divisible by sum of [${arr}] array elements which is ${sum}.`);
    }
}

divisibleProductBySum([3, 5, 1]);
