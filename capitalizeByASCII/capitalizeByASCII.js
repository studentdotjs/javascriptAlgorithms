let asciiCapitalize = function (str) {
    let strLowerCase = str.toLowerCase(),
        alphabets = "abcdefghijklmnopqrstuvwxyz",
        newStr = "";

    for (let i = 0; i < str.length; i++) {

        if ((alphabets.indexOf(strLowerCase[i]) + 1) % 2 === 0) {

            newStr += strLowerCase[i].toUpperCase();

        } else {

            newStr += strLowerCase[i];

        }
    }

    console.log(newStr);

};

asciiCapitalize("Wednesday Morning");
