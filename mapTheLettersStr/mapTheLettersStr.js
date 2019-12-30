let mapStrLetters = function (str) {
    let mappedStrObj = {},
        checkedLetters = [];

    for (let i = 0; i < str.length; i++) {
        if (checkedLetters.indexOf(str[i]) === -1) {
            let currentLetterIndex = str.indexOf(str[i]),
                currenrLetterArr = [];

            while (currentLetterIndex !== -1) {
                currenrLetterArr.push(currentLetterIndex);
                currentLetterIndex = str.indexOf(str[i], currentLetterIndex + 1);
            }

            mappedStrObj[str[i]] = currenrLetterArr;
            checkedLetters.push(str[i]);
        }

    }

    console.log(mappedStrObj);

};

mapStrLetters("javascript");
