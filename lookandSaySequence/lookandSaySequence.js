let nextTerm = function (term) {
    let lookAndSaySequence = "",
        currentStrNumCount = 1;

    for (let i = 0; i < term.length; i++) {
        while (term[i] === term[i + 1]) {
            currentStrNumCount++;
            i++;
        }

        lookAndSaySequence += currentStrNumCount + term[i];
        currentStrNumCount = 1;

    }

    console.log(`Next term of '${term}' is '${lookAndSaySequence}'.`);

};

nextTerm("1123221133");
