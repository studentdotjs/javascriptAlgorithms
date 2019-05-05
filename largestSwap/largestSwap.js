function largestAfterSwap(number) {
    console.log(`Before swapping : ${number}.`);
    let spiltedNumbers = number.toString().split("");
    let afterSwappingNum = parseInt(spiltedNumbers.reverse().join(""));
    console.log(`After swapping : ${afterSwappingNum}.`);

    if (number >= afterSwappingNum) {
        if (number === afterSwappingNum) {
            console.log(`Before swap ${number} is Equal To after swap ${afterSwappingNum}.`);
        } else {
            console.log(`Before swap ${number} is bigger than after swap ${afterSwappingNum}.`);
        }
    } else {
        console.log(`After swap ${afterSwappingNum} is bigger than before swap ${number}.`);
    }
}

largestAfterSwap(45);
