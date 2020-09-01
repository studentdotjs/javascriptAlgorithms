let leftMostDigit = function (str) {
    let strSplit = str.split(""),

        answer = strSplit.find(function (element) {
            if (element >= 0) {
                return element;
            }
        });

    answer = Number(answer);

    console.log(answer);

};

leftMostDigit("morning1zero5iftyfive");
