let validHexCode = function (hexCode) {
    let regEx = /^#[\da-fA-F]{6}$/,
        result = regEx.test(hexCode);

    result === true ? console.log(`"${hexCode}" is a valid hex code.`) : console.log(`"${hexCode}" is a invalid hex code.`);

};

validHexCode("#212cef");
