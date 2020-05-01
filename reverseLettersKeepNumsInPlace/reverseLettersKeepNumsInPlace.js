let onlyReverseLetters = function (str) {
    let strSplit = str.split(""),
        strCharReverse = [],
        indexOfStrNums = [],
        checkedStrNums = [];

    strSplit.forEach(function (char) {

        if (isNaN(char)) {
            strCharReverse.push(char);
        } else {

            if (checkedStrNums.indexOf(char) === -1) {
                let currentCharIndex = str.indexOf(char);
                while (currentCharIndex !== -1) {
                    indexOfStrNums.push(currentCharIndex);
                    currentCharIndex = str.indexOf(char, currentCharIndex + 1);
                    checkedStrNums.push(char);
                }
            }

        }

    });

    strCharReverse.reverse();

    indexOfStrNums.forEach(function (indexNumber) {
        strCharReverse.splice(indexNumber, 0, str.charAt(indexNumber));
    });

    strCharReverse = strCharReverse.join("");
    console.log(`After reversing only letters of "${str}" we have "${strCharReverse}".`);

};

onlyReverseLetters("java5sc51ri26");
