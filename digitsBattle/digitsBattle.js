let victoriousDigits = function (int) {
    let winningDigitsCombinedNum = [];
    let intToStr = int.toString().split("");

    for (let i = 0; i < intToStr.length; i += 2) {

        if (intToStr[i] > intToStr[i + 1]) {
            winningDigitsCombinedNum.push(intToStr[i]);
        } else if (intToStr[i] === intToStr[i + 1]) {
            continue;
        } else if (intToStr[i + 1] === undefined) {
            winningDigitsCombinedNum.push(intToStr[i]);
        } else {
            winningDigitsCombinedNum.push(intToStr[i + 1]);
        }
    }

    winningDigitsCombinedNum = parseInt(winningDigitsCombinedNum.join(""));
    console.log(`Winning integer is ${winningDigitsCombinedNum}.`);

};

victoriousDigits(6361092019);
