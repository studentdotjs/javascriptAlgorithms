function elementIncldesOrNot(arr, element) {
    if (arr.includes(element)) {
        console.log(`${element} is included in the ${arr} array.`);
    } else {
        console.log(`${element} is not included in the ${[arr]} array.`);
    }
}

elementIncldesOrNot([26, 07, 1996, 22], 30);
