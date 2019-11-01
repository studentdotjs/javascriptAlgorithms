let jackpotOrNot = function (arr) {
    let i;

    for (i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            continue;
        } else {
            console.log(`All elements of [${arr}] are not identical, there will be not any Jackpot.`);
            break;
        }
    }

    if (i === 4) {
        console.log(`All elements of [${arr}] are identical, It's a Jackpot.`);
    }

};

jackpotOrNot(["16", "16", "16", "16"]);
