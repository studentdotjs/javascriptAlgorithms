let isNumberSymmetrical = function (number) {

    let reversedNumber = Number(String(number).split("").reverse().join(""));

    if (number === reversedNumber) {

        console.log(true);

    } else {

        console.log(false);

    }

};

isNumberSymmetrical(10566501);
