let wordLengthsArr = function (wordsArr) {
    let newArr = [];

    wordsArr.forEach(function (word) {
        newArr.push(word.length);
    });

    console.log(newArr);
};

wordLengthsArr(["Eleven", "Nine", "Forty Nine"]);
