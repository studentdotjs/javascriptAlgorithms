let swap1stAndLastChar = function (str) {
    let str1stChar = str[0],
        strLastChar = str[str.length - 1],
        newStr = "";

    if (typeof str === "string" && str.length >= 2) {
        if (str[0] !== str[str.length - 1]) {
            newStr += strLastChar;
            newStr += str.slice(1, str.length - 1);
            newStr += str1stChar;
            console.log(`Aftre swapping first and last characters of "${str}" we have "${newStr}".`);
        } else {
            console.log(`The first and last characters of "${str}" are same, so they are "Two's a pair."`)
        }
    } else {
        console.log("Incompatible.");
    }
};

swap1stAndLastChar("i am javascript god");
