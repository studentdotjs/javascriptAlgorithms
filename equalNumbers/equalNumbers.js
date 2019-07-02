let equalValues = function (num1, num2, num3) {
    let equalValueCounter = null;

    while (equalValueCounter === null) {
        if (num1 === num2 || num1 === num3) {
            if (num2 === num3) {
                equalValueCounter = 3;
            } else {
                equalValueCounter = 2;
            }
        } else if (num2 === num3) {
            equalValueCounter = 2;
        } else {
            equalValueCounter = 0;
        }
    }
    console.log(`There are ${equalValueCounter} eqaul numbers.`);
};
equalValues(1, 7, 19);
