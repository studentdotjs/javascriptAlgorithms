function oddNumsProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0)
            product = product * arr[i];
    }
    console.log(`Product of all odd numbers in [${arr}] array is ${product}.`);
}

oddNumsProduct([0, 7, 4, 13, 10, 26, 23]);
