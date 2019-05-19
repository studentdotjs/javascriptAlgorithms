function cocatIntArr(arr1, arr2) {
    let concatenatedArr = arr1.concat(arr2);
    console.log(`Before Concat: \nArray 1 - [${arr1}] \nArray 2 - [${arr2}] \n\nAfter Concat\n [${concatenatedArr}].`);
}

cocatIntArr([10, 100, 1000], [20, 200, 2000]);
