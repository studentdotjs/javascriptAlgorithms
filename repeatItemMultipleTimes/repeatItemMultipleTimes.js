function repeatItems(itemName, times) {
    let repeatItemArr = [];
    for (let i = 0; i < times; i++) {
        repeatItemArr[i] = itemName;
    }
    console.log(`${typeof itemName} ${itemName} after repetition of ${times} times: [${repeatItemArr}].`);
}

repeatItems('naveen', 22);
