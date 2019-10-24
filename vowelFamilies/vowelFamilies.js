let sameVowelGroupArr = function (wordArr) {
    let vowels = ["a", "e", "i", "o", "u"],
        firstWordVowelCounter = 0,
        firstWordVowelArr = [],
        vowelFamily = [];

    wordArr[0].split("").forEach(function (char) {
        if (vowels.includes(char) && firstWordVowelArr.indexOf(char) === -1) {
            firstWordVowelCounter++;
            firstWordVowelArr.push(char);
        }
    });

    wordArr.forEach(function (word) {

        let currentWordVowelCounter = 0,
            currentWordVowelArr = [],
            counter = 0;

        word.split("").forEach(function (wordChar) {
            if (vowels.includes(wordChar) && currentWordVowelArr.indexOf(wordChar) === -1) {
                currentWordVowelCounter++;
            }

            if (firstWordVowelArr.includes(wordChar) && currentWordVowelArr.indexOf(wordChar) === -1) {
                currentWordVowelArr.push(wordChar);
                counter++;
            }

        });

        if (firstWordVowelCounter === counter && firstWordVowelCounter === currentWordVowelCounter) {
            vowelFamily.push(word);
        }

    });

    console.log(`Words that have the same vowles as the first word of [${wordArr}] array, including the first word is [${vowelFamily}].`);

};

sameVowelGroupArr(["toe", "ocelot", "maniac"]);
