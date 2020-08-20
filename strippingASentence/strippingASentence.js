let stripSentence = function (sentence, chars) {
    let strippedSentence = "";

    for (let i = 0; i < sentence.length; i++) {

        if (chars.indexOf(sentence[i]) === -1) {

            strippedSentence += sentence[i];

        }

    }

    console.log(strippedSentence);

};

stripSentence("my name is naveen sharma", "ahe");
