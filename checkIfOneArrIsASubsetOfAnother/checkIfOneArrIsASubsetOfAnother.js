let subsetOrNot = function (arrA, arrB) {
    let i, answer = null;

    for (i = 0; i < arrA.length; i++) {
        if (arrB.indexOf(arrA[i]) === -1) {
            break;
        }
    }

    answer = i === arrA.length ? true : false;

    console.log(answer);

};

subsetOrNot([5, 10, 1, 20], [1, 4, 9, 5, 23, 10, 20]);
