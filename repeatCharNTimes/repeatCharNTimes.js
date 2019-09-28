let repeatCharNTImes = function (str, n, char) {
    let newStr = null;

    newStr = str.replace(char, str.charAt(str.indexOf(char)).repeat(n));

    console.log(`After repeating "${char}" of "${str}" ${n} times we have "${newStr}".`);

};

repeatCharNTImes("javascript", 6, "i");
