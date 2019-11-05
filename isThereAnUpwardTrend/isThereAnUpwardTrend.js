let isUpwardTrend = function (numArr) {
    let i = null;

    for (i = 0; i < numArr.length - 1; i++) {
        if ((numArr[i] < numArr[i + 1]) && (typeof numArr[i] === "number" && typeof numArr[i + 1] === "number")) {
            continue;
        } else if (typeof numArr[i] === "string" || typeof numArr[i + 1] === "string") {
            console.log("Strings not permitted!");
            break;
        } else {
            console.log(`${false}, There is not an upward trend in [${numArr}].`);
            break;
        }
    }

    if (i === numArr.length - 1) {
        console.log(`${true}, There is an upward trend in [${numArr}].`);
    }
};

isUpwardTrend([18, 19, 23, 30]);
