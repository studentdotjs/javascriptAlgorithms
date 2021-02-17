const numsSumGreater5 = (numsArr) => {

    let answer = 0;

    numsArr.forEach(function (num) {

        if (num > 5) {

            answer = answer + num;

        }

    });

    console.log(answer);

};

numsSumGreater5([1, 5, 20, 30, 4, 9, 18]);
