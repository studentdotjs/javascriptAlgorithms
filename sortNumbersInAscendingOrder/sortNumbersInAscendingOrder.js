let sortIntsAscending = function (intArr) {
    if (Array.isArray(intArr) === true) {

        if (intArr.length > 0) {

            intArr.sort(function (a, b) {
                return a - b;
            });

        } else {

            console.log(intArr);

        }

    } else {

        console.log([]);

    }

    console.log(intArr);

};

sortIntsAscending([7, 22, 4, -20, 2, -49]);
