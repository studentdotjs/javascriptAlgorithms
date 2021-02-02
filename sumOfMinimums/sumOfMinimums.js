const sumMinimumNums = (twoDNumArr) => {

    let answer = 0;

    for (let i = 0; i < twoDNumArr.length; i++) {

        let currMinimumNum = 0;

        currMinimumNum = Math.min(...twoDNumArr[i]);

        answer = answer + currMinimumNum;

    }

    console.log(answer);

};

sumMinimumNums([[9, 27, 2], [2, 20, 21]]);
