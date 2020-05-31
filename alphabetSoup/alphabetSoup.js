let strInAlphaOrder = function (str) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz",
        strSplit = str.split(""),
        onlyChars = [],
        strInOrder = null;

    strSplit.forEach(function (char) {
        if (alphabets.includes(char)) {
            onlyChars.push(char);
        }
    });

    strInOrder = onlyChars.sort().join("");
    console.log(strInOrder);

};

strInAlphaOrder("good morning");
