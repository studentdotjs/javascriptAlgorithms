let createContactNumber = function (arrInt) {
    let contactNumber = null,
        first3Digits = "(",
        middle3Digits = "",
        last4Digits = "";

    arrInt.forEach(function (digit, i) {

        if (i < 3) {

            first3Digits += digit;

            if (i === 2)
                first3Digits += ") ";

        } else if (i < 6) {

            middle3Digits += digit;

            if (i === 5)
                middle3Digits += "-";

        } else {

            last4Digits += digit;

        }

    });

    contactNumber = first3Digits.concat(middle3Digits, last4Digits);

    console.log(contactNumber);

};

createContactNumber([1, 0, 3, 2, 2, 5, 0, 4, 2, 0]);
