let words, positionNumber, indexNumberOfLongestWord, inputCopy, length = null;
let longestWord = "";

function longestWordInStr(sentence) {
    inputCopy = sentence;
    words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
            length = longestWord.length;
            positionNumber = i + 1;
            indexNumberOfLongestWord = inputCopy.indexOf(longestWord);
        }
    }
}

// Please Enter A String / Sentence

longestWordInStr('i love javascript');

// Outputs Are As Follows:

console.log(`In "${inputCopy}" the longest word is "${longestWord}".`);
console.log(`The length of the longest word "${longestWord}" is ${length}.`);
console.log(`The position number of the longest word "${longestWord}" is ${positionNumber}.`);
console.log(`The index number of the longest word "${longestWord}" is ${indexNumberOfLongestWord}.`);
