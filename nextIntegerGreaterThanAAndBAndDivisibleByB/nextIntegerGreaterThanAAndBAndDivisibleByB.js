const nextIntDivisibleByB = (intA, intB) => {

    let intBMultiples = null,
        i = 1;

    while (intBMultiples <= intA) {

        intBMultiples = i * intB;

        i++;

    }

    console.log(intBMultiples);

};

nextIntDivisibleByB(40, 9);
