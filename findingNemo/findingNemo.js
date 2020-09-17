let findNemo = function (str) {
    let indexOfNemo = str.split(" ").indexOf("Nemo"),
        newStr = null;

    if (indexOfNemo === -1) {

        newStr = `I can't find Nemo :(`;

    } else {

        newStr = `I found Nemo at ${indexOfNemo + 1}!`;

    }

    console.log(newStr);

};

findNemo("I have to find Nemo in the String");
