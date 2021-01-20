const remMistakes = (wrongStr) => {

    let wrongStrSplit = wrongStr.split(""),
        errorIntegers = ["0", "1", "4", "5"],
        rightLetters = "OIAS",
        rightStr = null;

    for (let i = 0; i < errorIntegers.length; i++) {

        let currWrongInt = errorIntegers[i],
            currWrongIntIndex = wrongStrSplit.indexOf(currWrongInt);

        while (currWrongIntIndex !== -1) {

            wrongStrSplit.splice(currWrongIntIndex, 1, rightLetters.charAt(errorIntegers.indexOf(currWrongInt)));

            currWrongIntIndex = wrongStrSplit.indexOf(currWrongInt, currWrongIntIndex + 1);

        }


    }

    rightStr = wrongStrSplit.join("");

    console.log(rightStr);

};

remMistakes("1ND14");
