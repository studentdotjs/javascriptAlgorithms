let lowerCaseLettersArrToObj = function (lettersArr) {
    let lowerAndUpperCaseObj = {};

    lettersArr.forEach(function (letter) {
        lowerAndUpperCaseObj[letter] = letter.toUpperCase();
    });

    console.log(lowerAndUpperCaseObj);

};

lowerCaseLettersArrToObj(["t", "o", "d", "a", "y"]);
