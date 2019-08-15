let vowels1stConsonants2nd = function (str) {
    let vowels = "aeiou",
        newStr = "",
        vowelsStr = "",
        consonentsStr = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsStr += str[i];
        } else {
            consonentsStr += str[i];
        }
    }

    newStr = vowelsStr + consonentsStr;
    console.log(`After putting all vowels first and all consonents second of "${str}" we have "${newStr}".`);

};

vowels1stConsonants2nd("i am a javascript developer.");
