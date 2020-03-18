let dividesEvenlyOrNot = function (dividend, divisor) {

    let remainder = dividend % divisor;

    if (remainder === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

};

dividesEvenlyOrNot(30, 17);
