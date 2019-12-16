let firstLetterBefore2ndLetter = function (str, firstLetter, secondLetter) {
    let indexOf1stLetter = str.indexOf(firstLetter),
        indexOf2ndLetter = str.indexOf(secondLetter);

    while (indexOf1stLetter < indexOf2ndLetter && indexOf1stLetter !== -1) {
        indexOf1stLetter = str.indexOf(firstLetter, indexOf1stLetter + 1);
    }

    if (indexOf1stLetter === -1) {
        console.log(`${true}, In "${str}" every instance of "${firstLetter}" occurs before every instance of "${secondLetter}".`);
    } else {
        console.log(`${false}, In "${str}" every instance of "${firstLetter}" does not occurs before every instance of "${secondLetter}".`);
    }

};

firstLetterBefore2ndLetter("javascript developer", "a", "e");
