const createLittleDictionary = (initialWord, wordArr) => {

    let littleDictionary = [];

    wordArr.forEach(function (currWord) {

        if (currWord.startsWith(initialWord) === true) {

            littleDictionary.push(currWord);

        }

    });

    console.log(littleDictionary);

};

createLittleDictionary("an", ["annoy", "drip", "angry", "and", "keep"]);
