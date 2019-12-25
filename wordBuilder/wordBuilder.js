let wordBuilder = function (scrambledLettersArr, positionsArr) {
    let word = "",
        scrambledLettersStr = scrambledLettersArr.join("");

    for (let i = 0; i < positionsArr.length; i++) {
        word += scrambledLettersStr.charAt(positionsArr.indexOf(i));
    }

    console.log(`After building the scrambled letters of [${scrambledLettersArr}] according to the position numbers of [${positionsArr}] we have "${word}".`);

};

wordBuilder(["a", "v", "r", "j", "c", "i", "t", "p", "a", "s"], [3, 2, 6, 0, 5, 7, 9, 8, 1, 4]);
