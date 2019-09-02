let searchBrokenKeys = function (correctPhrase, wrongTypedPhrase) {
    let brokenKeys = [];

    for (let i = 0; i < correctPhrase.length; i++) {
        if (correctPhrase[i] !== wrongTypedPhrase[i] && brokenKeys.indexOf(correctPhrase[i]) === -1) {
            brokenKeys.push(correctPhrase[i]);
        }
    }

    console.log(`Broken keys are : [${brokenKeys}].`);

};

searchBrokenKeys("javascript", "ecmascript");
