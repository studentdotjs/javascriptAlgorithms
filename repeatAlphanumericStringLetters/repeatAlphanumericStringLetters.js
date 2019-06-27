let repeatLetters = function (str) {
    let repeatedLettersStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            repeatedLettersStr += str[i].repeat(str.charAt(i + 1));
        }
    }
    console.log(`After repeating letters of "${str}" = "${repeatedLettersStr}".`);
};

repeatLetters("n3a7v2e5e8n9");
