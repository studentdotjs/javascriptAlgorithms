let replaceInts = function (intArr) {
    let replacedIntArr = [];

    intArr.forEach(function (arr) {
        let currentReplacedIntArr = [];

        arr.forEach(function (int) {
            int === 0 ? currentReplacedIntArr.push(1) : currentReplacedIntArr.push(0);
        });

        replacedIntArr.push(currentReplacedIntArr);

    });

    console.log(replacedIntArr);

};

replaceInts([
  [0, 1, 1],
  [0, 0, 0],
  [1, 1, 1]
]);
