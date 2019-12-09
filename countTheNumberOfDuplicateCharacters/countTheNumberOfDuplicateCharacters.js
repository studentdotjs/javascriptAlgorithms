let numberOfDuplicatesChars = function (str) {
    let charsMoreThenOnce = 0,
        currentElemntCount = 0,
        checkedArrElements = [];

    for (let i = 0; i < str.length; i++) {
        if (checkedArrElements.indexOf(str[i]) === -1) {
            let currentElementIndex = str.indexOf(str[i]),
                currentElemntCount = 0;

            while (currentElementIndex !== -1) {
                currentElemntCount++;
                currentElementIndex = str.indexOf(str[i], currentElementIndex + 1)
            }

            if (currentElemntCount > 1) {
                charsMoreThenOnce++;
                checkedArrElements.push(str[i]);
            }

        }

    }

    console.log(`Total number of duplicate characters in the "${str}" is ${charsMoreThenOnce}.`);

};

numberOfDuplicatesChars("javascript");
