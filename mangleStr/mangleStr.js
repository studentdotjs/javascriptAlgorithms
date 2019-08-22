let mangleTheStr = function (str) {
    let mangledStr = "",
        alphabets = "zabcdefghijklmnopqrstuvwxyzZABCDEFGHIJKLMNOPQRSTUVWXYZ",
        vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (alphabets.includes(str[i])) {
            mangledStr += alphabets.charAt(alphabets.indexOf(str[i]) + 1);
            if (vowels.includes(mangledStr[i])) {
                mangledStr = mangledStr.replace(mangledStr[i], mangledStr[i].toUpperCase());
            }
        } else if (alphabets[i] === " ") {
            mangledStr += " ";
        } else {
            mangledStr += str[i];
        }
    }

    console.log(`After mangling the "${str}" string we have "${mangledStr}".`);

};

mangleTheStr("I am a JavaScript developer!!!");
