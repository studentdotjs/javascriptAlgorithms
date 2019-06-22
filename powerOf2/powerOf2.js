let powerOf2 = function (number) {
    let i;
    for (i = 1; i < number;) {
        if (number % i === 0)
            i *= 2;
        else
            break;
    }

    if (i === number) {
        console.log(`${number} is an integer of power of 2.`);
    } else {
        console.log(`${number} is not an integer of power of 2.`);
    }

};
powerOf2(21);
