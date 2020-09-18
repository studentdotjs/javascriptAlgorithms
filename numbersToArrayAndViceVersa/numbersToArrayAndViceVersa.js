let numAndArrConversion = function (numOrArr) {
    let answer = "";

    if (typeof numOrArr === "number") {

        numOrArr = String(numOrArr), answer = [];

        for (let i = 0; i < numOrArr.length; i++) {

            answer.push(Number(numOrArr[i]));

        }

    } else {

        numOrArr.forEach(function (number) {

            answer += number;

        });

        answer = Number(answer);

    }

    console.log(answer);

};

numAndArrConversion(235);
