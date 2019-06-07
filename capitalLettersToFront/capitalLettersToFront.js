let capitalLettersToFront = function (str) {
    let capChars = "",
        smallChars = "",
        capsToFront = null,
        splitStr = null;
    splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === splitStr[i].toUpperCase()) {
            capChars += splitStr[i];
        } else {
            smallChars += splitStr[i];
        }
    }
    capsToFront = capChars.concat(smallChars);
    console.log(`After moving captial letters of '${str}' into the front of the word we got '${capsToFront}'.`);
};

capitalLettersToFront('NaVeEn');
