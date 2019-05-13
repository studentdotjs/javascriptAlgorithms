function removeNullValues(arr) {
    for (let i = 0; i < arr.length;) {
        if (arr[i] === null) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    if (arr.length > 0)
        console.log(`After removing all ${null} values from the array we have ${arr} values in the array.`);
    else {
        console.log(`After removing all ${null} values from the array we don't have any values in the array.`);
    }
}

removeNullValues([null, null, null, null]);
