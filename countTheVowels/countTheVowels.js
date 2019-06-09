let countNumVowels = function (word) {
    let j = 0,
        vowelCounter = 0,
        vowelContainer = [j],
        splitWord = null;
    splitWord = word.split("");
    for (let i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === 'a' || splitWord[i] === 'A' || splitWord[i] === 'e' || splitWord[i] === 'E' ||
            splitWord[i] === 'i' || splitWord[i] === 'I' || splitWord[i] === 'o' || splitWord[i] === 'O' ||
            splitWord[i] === 'u' || splitWord[i] === 'U') {
            vowelCounter++;
            vowelContainer[j] = splitWord[i];
            j++;
        }

    }
    console.log(`In '${word}' vowels are [${vowelContainer}] and total number of vowels are ${vowelCounter}.`);
};

countNumVowels('Javascript');
