let startsWithVowel = function (str) {
    let strCopy = str;
    str = str.toLowerCase().split("");
    str.pop();

    let strSplit = str.join("").split(" "),
        vowelStrArr = [],
        vowelArr = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < strSplit.length; i++) {

        for (let j = 0; j < vowelArr.length;) {

            if (strSplit[i].startsWith(vowelArr[j])) {
                vowelStrArr.push(strSplit[i]);
                j = 5;
            } else {
                j++;
            }

        }
    }

    console.log(`In the "${strCopy}" those words which starts with vowels are [${vowelStrArr}].`);

};

startsWithVowel("I am a self - taught javascript developer.");
