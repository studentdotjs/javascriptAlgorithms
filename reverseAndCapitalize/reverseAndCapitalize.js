let reverseCapitalizeStr = function (lowerCaseStr) {
    let newStr = lowerCaseStr.split("").reverse().join("").toUpperCase();
    console.log(newStr);
};

reverseCapitalizeStr("seventeen");
