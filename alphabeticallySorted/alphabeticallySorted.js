let alphabeticallySortedOrNot = function (sentence) {
    let senSplitAndLower = sentence.toLowerCase().split(" "),
        alphabets = "abcdefghijklmnopqrstuvwxyz",
        sortedWordCount = 0;

    senSplitAndLower.forEach(function (word) {
        if (word.length >= 3) {
            let currWordSplit = word.split("");

            currWordSplit.forEach(function (char, i) {
                if (alphabets.indexOf(char) === -1) {
                    currWordSplit.splice(i, 1);
                }

            });

            let i, currWordJoin = currWordSplit.join(""),
                prevLetterIndex = alphabets.indexOf(currWordJoin[0]);

            for (i = 1; i < currWordJoin.length; i++) {
                let currLetterIndex = alphabets.indexOf(currWordJoin[i]);

                if (currLetterIndex >= prevLetterIndex) {
                    prevLetterIndex = currLetterIndex;
                } else {
                    break;
                }
            }

            if (i === currWordJoin.length) {
                sortedWordCount++;
            }

        }

    });

    if (sortedWordCount > 0) {
        console.log(true);
    } else {
        console.log(false);
    }

};

alphabeticallySortedOrNot("I am a javascript developer.");
