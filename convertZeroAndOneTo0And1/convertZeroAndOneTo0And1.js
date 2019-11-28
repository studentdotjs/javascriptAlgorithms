let strToBinaryNumber = function (str) {
    let strToLowerCase = str.toLowerCase().split(" "),
        binaryNumber = [],
        excessNumbers = null;

    if (strToLowerCase.length >= 8) {
        for (let i = 0; i < strToLowerCase.length; i++) {
            if (strToLowerCase[i] === "zero") {
                binaryNumber.push("0");
            } else if (strToLowerCase[i] === "one") {
                binaryNumber.push("1");
            }
        }

        if (binaryNumber.length >= 8) {
            if (binaryNumber.length % 8 !== 0) {
                excessNumbers = binaryNumber.length % 8;
                binaryNumber.splice(binaryNumber.length - excessNumbers, excessNumbers);
                binaryNumber = binaryNumber.join("");
            } else {
                binaryNumber = binaryNumber.join("");
            }

            console.log(`After converting "${str}" into binary number string we have "${binaryNumber}".`);

        } else {
            binaryNumber = "";
            console.log(`"${str}" is not a multiple of 8 so we have "${binaryNumber}".`);
        }

    } else {
        binaryNumber = "";
        console.log(`"${str}" is not a multiple of 8 so we have "${binaryNumber}".`);
    }

};

strToBinaryNumber("one one");
