const numsOnlyLessAndGreaterThan = (num1, num2, numArr) => {

    let newNumArr = [];

    numArr.forEach(function (num) {

        if (num > num1 && num < num2) {
            newNumArr.push(num);
        }

    });

    console.log(newNumArr);

};

numsOnlyLessAndGreaterThan(3, 8, [1, 5, 95, 0, 4, 7]);
