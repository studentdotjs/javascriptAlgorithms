let squareIntDigits = function (int) {
    let intToStrSplit = String(int).split(""),
        answer = "";

    intToStrSplit.forEach(function (digit) {
        answer += digit * digit;
    });

    answer = Number(answer);

    console.log(answer);

};

squareIntDigits(428200);
