let diceGamble = function (rollValuesArr) {
    let sumOfRolls = 0;

    for (let i = 0; i < rollValuesArr.length; i++) {
        if (rollValuesArr[i - 1] === 1) {
            sumOfRolls = sumOfRolls + 0;
        } else if (rollValuesArr[i - 1] === 6) {
            sumOfRolls = sumOfRolls + rollValuesArr[i] * 2;
        } else {
            sumOfRolls = sumOfRolls + rollValuesArr[i];
        }
    }

    console.log(`Sum of the dice rolls [${rollValuesArr}] is ${sumOfRolls}.`);

};

diceGamble([5, 4, 1, 6]);
