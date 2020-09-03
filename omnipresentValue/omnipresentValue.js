let omnipresentValueOrNot = function (numArr, num) {
    let i = null;

    for (i = 0; i < numArr.length; i++) {

        if (numArr[i].includes(num) !== true) {

            console.log(false);

            break;

        }
    }

    if (i === numArr.length) {

        console.log(true);

    }

};

omnipresentValueOrNot([
  [17, 0, 15],
  [30, 4, 20, 1, 15],
  [20, 21, 15]
], 15);
