let join2PortionsPath = function (portion1, portion2) {
    let indexOfSeparator = (portion1.concat(portion2)).indexOf("/"),
        count = 0,
        joinedPath = null;

    while (indexOfSeparator !== -1) {

        count++;

        indexOfSeparator = (portion1.concat(portion2)).indexOf("/", indexOfSeparator + 1);

    }

    joinedPath = count === 2 ? portion1.slice(0, portion1.length - 1).concat(portion2) : count === 1 ? portion1.concat(portion2) : portion1.concat("/", portion2);

    console.log(joinedPath);

};

join2PortionsPath("Naveen", "Sharma");
