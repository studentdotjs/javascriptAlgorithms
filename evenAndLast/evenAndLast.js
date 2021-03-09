const evenIndexSum = (intArr) => {

    let answer = null;

    if (intArr.length > 0) {

        intArr.forEach(function (int, i) {

            if (i % 2 === 0) {

                answer += int;

            }

        });

        answer *= intArr[intArr.length - 1];

    } else {

        answer = 0;

    }

    console.log(answer);

};

evenIndexSum([6, 12, 3, 9, 20, 21]);
