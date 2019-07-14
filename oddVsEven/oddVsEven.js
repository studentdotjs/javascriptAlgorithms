let oddVsEvenNums = function (number) {
    let splitNums = number.toString().split(""),
        evenNumSum = 0,
        oddNumSum = 0;

    for (let i = 0; i < splitNums.length; i++) {
        if (splitNums[i] % 2 === 0) {
            evenNumSum = evenNumSum + parseInt(splitNums[i]);
        } else {
            oddNumSum = oddNumSum + parseInt(splitNums[i]);
        }
    }

    console.log(`In ${number} sum of even numbers are ${evenNumSum} and sum of odd numbers are ${oddNumSum}.`);

    if (evenNumSum >= oddNumSum) {
        if (evenNumSum > oddNumSum) {
            console.log(`${evenNumSum} is greater than ${oddNumSum}.`);
        } else {
            console.log(`${evenNumSum} and ${oddNumSum} both are equal.`);
        }
    } else {
        console.log(`${oddNumSum} is greater than ${evenNumSum}.`);
    }
};

oddVsEvenNums(117196842);
