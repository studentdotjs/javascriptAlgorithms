let tweakStrLetters = function (str, tweakArr) {
    let letters = "abcdefghijklmnopqrstuvwxyz",
        tweakedStr = "";

    for (let i = 0; i < str.length; i++) {

        if (tweakArr[i] === 1) {
            let nextElement = letters.charAt(letters.indexOf(str[i]) + 1);

            if (nextElement === "") {
                tweakedStr += "a";
            } else {
                tweakedStr += nextElement;
            }
        } else if (tweakArr[i] === -1) {
            let previousElement = letters.charAt(letters.indexOf(str[i]) - 1);

            if (previousElement === "") {
                tweakedStr += "z";
            } else {
                tweakedStr += previousElement;
            }
        } else {
            tweakedStr += str[i];
        }
    }

    console.log(`After tweaking letters of "${str}" we have "${tweakedStr}".`);

};

tweakStrLetters("javascript", [1, -1, 0, -1, 1, 0, 0, -1, 1, 1]);
