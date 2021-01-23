const arithmeticProgression = (firstInt, difference, nSequence) => {

    let arithmeticProgressionSequence = [],
        currTotal = firstInt;

    for (let i = 0; i < nSequence; i++) {

        arithmeticProgressionSequence.push(currTotal);

        currTotal = currTotal + difference;

    }

    arithmeticProgressionSequence = arithmeticProgressionSequence.join(", ");

    console.log(arithmeticProgressionSequence);

};

arithmeticProgression(10, 2, 21);
