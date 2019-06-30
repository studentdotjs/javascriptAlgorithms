let getMiddleChars = function (str) {
    let strLength = str.length,
        middleChars = "";

    if (strLength % 2 === 0) {
        let half = strLength / 2;
        half--;
        middleChars += str.slice(half, half + 2);
    } else {
        half = parseInt(strLength / 2);
        middleChars = str.slice(half, half + 1);
    }

    console.log(`Middle characters of "${str}" is "${middleChars}".`);

};

getMiddleChars("javascript");
