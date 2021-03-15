const sumArrNums = (numArr) => {

    let answer = 0;

    numArr.forEach(function (num) {

        answer = num % 2 === 0 ? answer + Math.pow(num, 2) : answer + Math.sqrt(num);

    });

    answer = Number(answer.toFixed(2));

    console.log(answer);

};

sumArrNums([8, 37, 3, 15, 20, 21]);
