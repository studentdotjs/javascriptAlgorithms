let intItemIndex = function (arr, intItem) {
    let index = arr.indexOf(intItem);

    if (arr.indexOf(intItem) !== -1) {
        console.log(`Index number of ${intItem} in the [${arr}] array is ${index}.`);
    } else {
        console.log(`${intItem} is not present in the [${arr}] array, therefore index number of ${intItem} is -1.`);
    }

};

intItemIndex([22, 08, 20, 19], 99);
