function longestWordInStr(str) {

    const strSplit = str.split(" ");
    let currLongestWord = strSplit[0];

    for (let i = 1; i < strSplit.length; i++) {

        if (strSplit[i].length > currLongestWord.length) {

            currLongestWord = strSplit[i];

        }

    }

    const lenLongestWord = currLongestWord.length,
        posNumLongestWord = strSplit.indexOf(currLongestWord) + 1,

        indexLongestWord = strSplit.indexOf(currLongestWord);

    console.log(currLongestWord, lenLongestWord, posNumLongestWord, indexLongestWord);

}

longestWordInStr('i love javascript');
