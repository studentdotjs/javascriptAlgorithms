let charMapping = function (word) {
    let mapCharArr = [],
        mapCounter = 0,
        charArr = [];

    word.split("").forEach(function (char) {
        if (charArr.includes(char)) {
            mapCharArr.push(charArr.indexOf(char));
        } else {
            charArr.push(char);
            mapCharArr.push(mapCounter);
            mapCounter++;
        }
    });

    console.log(`After mapping of characters of "${word}", we have [${mapCharArr}] array.`);

};

charMapping("javascript");
