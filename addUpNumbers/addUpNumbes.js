function addUpNumbers(number) {
    let numberAfterAddUp = 0;
    for (let i = 1; i <= number; i++) {
        numberAfterAddUp = numberAfterAddUp + i;
    }
    console.log(`After adding up all numbers from 1 to ${number} we got : ${numberAfterAddUp}.`);
}

addUpNumbers(22);
