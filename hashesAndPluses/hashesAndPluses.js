function hashAndPlusCount(str) {
    let hashCounter = 0,
        plusCounter = 0,
        hashAndPlusArr = [];
    let splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === "#") {
            hashCounter++;
        } else {
            plusCounter++;
        }
    }
    hashAndPlusArr.push(hashCounter) + hashAndPlusArr.push(plusCounter);
    console.log(`Total number of '#' and '+' in the '${str}' is [${hashAndPlusArr}].`);
}

hashAndPlusCount("#+#+######+++++####+");
