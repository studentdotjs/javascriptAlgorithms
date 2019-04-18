function isLessThanOrEqualToZero(number) {
    if (number <= 0) {
        if (number === 0) {
            console.log(`Equal number, so the answer is "True".`);
        } else {
            console.log(`${number} is less than zero, so the answer is "True".`);
        }
    } else {
        console.log(`${number} is greater then zero, so the answer is "False".`);
    }
}

isLessThanOrEqualToZero(5);
