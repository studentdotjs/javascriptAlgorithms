function digitsOfNum(num) {
    let convertNum = num.toString();
    convertNum = convertNum.split("");
    let totalDigitsNum = convertNum.length;
    console.log(`The total number of digits in the ${num} is ${totalDigitsNum}.`);
}

digitsOfNum(15052019);
