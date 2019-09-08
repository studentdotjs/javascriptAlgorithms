let leftAteRight = function (intArr) {
    let leftInt = intArr[0],
        grandTotalArr = [],
        i;

    for (i = 1; i < intArr.length; i++) {
        if (leftInt > intArr[i]) {
            leftInt = leftInt + intArr[i];
            grandTotalArr[0] = leftInt;
        } else if (i > 1) {
            grandTotalArr.push(intArr[i]);
            leftInt = 0;
        } else {
            grandTotalArr = intArr;
            break;
        }
    }

    console.log(grandTotalArr);

};

leftAteRight([10, 4, 8, 7, 20, 19]);
