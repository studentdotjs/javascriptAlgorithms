let strToCamelCase = function (str) {
    let strSplit = str.split(""),
        delimiter = null,
        camelCaseStr = "";

    if (str.includes("-")) {
        delimiter = "-";
    } else {
        delimiter = "_";
    }

    while (strSplit.indexOf(delimiter) !== -1) {
        let occurence = strSplit.indexOf(delimiter);
        strSplit.splice(occurence, 1);
        strSplit[occurence] = strSplit[occurence].toUpperCase();
    }

    camelCaseStr = strSplit.join("");
    console.log(`After converting "${str}" string into camelCase we have "${camelCaseStr}".`);

};

strToCamelCase("I-am-a-javaScript-developer.");
