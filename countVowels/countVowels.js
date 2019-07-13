let totalVowels = function (str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'],
        strSplit = str.split(""),
        vowelCounter = 0;

    for (let i = 0; i < strSplit.length; i++) {
        if (vowels.includes(strSplit[i])) {
            vowelCounter++;
        }
    }

    console.log(`Total vowels in "${str}" is ${vowelCounter}.`);

};

totalVowels('javascript');
