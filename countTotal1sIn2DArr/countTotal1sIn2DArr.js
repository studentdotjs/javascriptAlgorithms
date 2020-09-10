let countOnes = function (twoDArr) {
    let total1s = 0;

    twoDArr.forEach(function (arr) {

        arr.forEach(function (number) {

            if (number === 1) {

                total1s = total1s + number;

            }

        });

    });

    console.log(total1s);

};

countOnes([
  [11, 1, 13],
  [1, 20, 1, 5],
  [1, 1, 20]
]);
