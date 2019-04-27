function checkDivisibleBy100(number) {
    if (number % 100 === 0) {
        console.log(`${number} is divisible by 100`);
    } else {
        console.log(`${number} is not divisible by 100`);
    }
}

checkDivisibleBy100(250);
