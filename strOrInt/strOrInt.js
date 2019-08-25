let integerOrStr = function (value) {
    if (typeof value === "number") {
        console.log(`${value} is a integer.`);
    } else {
        console.log(`${value} is a string.`);
    }
};

integerOrStr(24);
