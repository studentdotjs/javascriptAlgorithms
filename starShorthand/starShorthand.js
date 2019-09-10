let stringToStarStr = function (str) {
    let strToShorthand = "",
        shortedStr = "";

    for (let i = 0; i < str.length; i++) {
        if (shortedStr.indexOf(str[i]) === -1) {
            let currentCharOccurence = str.indexOf(str[i]),
                count = 0;

            while (currentCharOccurence !== -1) {
                currentCharOccurence = str.indexOf(str[i], currentCharOccurence + 1);
                count++;
            }

            if (count === 1) {
                strToShorthand += str[i];
            } else {
                strToShorthand += str[i] + "*" + count;
            }

            shortedStr += str[i];

        }
    }

    console.log(`After converting the "${str}" into star shorthand we have "${strToShorthand}".`);

};

stringToStarStr("programming");
