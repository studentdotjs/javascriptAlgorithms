let scoreCalculator = function (easy, medium, hard) {
    let totalScore = 0;

    if (easy >= 0 && medium >= 0 && hard >= 0) {
        totalScore = (easy * 5) + (medium * 10) + (hard * 20);
    } else {
        totalScore = "invalid";
    }

    console.log(totalScore);

};

scoreCalculator(8, 5, 2);
