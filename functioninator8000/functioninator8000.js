let functioninator8000 = function (str) {
    let strTolowerCase = str.toLowerCase(),
        vowels = "aeiou",
        newStr = "";

    if (vowels.includes(strTolowerCase[strTolowerCase.length - 1])) {
        newStr = str.concat(`-inator`, ` ${str.length}000`);
    } else {
        newStr = str.concat(`inator`, ` ${str.length}000`);
    }

    console.log(newStr);

};

functioninator8000("JavaScript");
