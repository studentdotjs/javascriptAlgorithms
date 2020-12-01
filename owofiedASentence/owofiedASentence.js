const owofiedStr = (str) => {

    let newSentence = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i] === "i") {

            newSentence += "wi";

        } else if (str[i] === "e") {

            newSentence += "we";

        } else {

            newSentence += str[i];

        }

    }

    newSentence += " owo";

    console.log(newSentence);

};

owofiedStr("I am a JavaScript Developer");
