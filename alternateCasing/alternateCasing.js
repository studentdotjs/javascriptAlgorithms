let alternateStrLetters = function (str) {
    let splitStr = str.split(""),
        alternateStr = "";

    for (let i = 0; i < splitStr.length; i++) {
        if (i % 2 === 0) {
            alternateStr += splitStr[i].toUpperCase();
        } else
            alternateStr += splitStr[i].toLowerCase();
    }

    console.log(`After converting every odd number character into lowercase and even number character into uppercase of "${str}" string = "${alternateStr}".`);

};

alternateStrLetters("javascript is awesome");
