let countStrAdverbs = function (str) {
    let splitStr = str.split(" "),
        adverbsCounter = 0;

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].endsWith('ly') || splitStr[i].endsWith('ly.') || splitStr[i].endsWith('ly,')) {
            adverbsCounter++;
        }
    }

    console.log(`Total adverbs in "${str}" string is ${adverbsCounter}".`);

};

countStrAdverbs("I am a javascript programmer.");
