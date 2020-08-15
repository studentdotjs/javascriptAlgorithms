let oneOddOneEven = function (int) {
    let intToStrSplit = String(int).split(""),
        evenCount = 0,
        oddCount = 0;

    intToStrSplit.forEach(function (int) {

        if (int % 2 === 0) {

            evenCount++;

        } else {

            oddCount++;

        }

    });

    if (evenCount === oddCount) {

        console.log(true);

    } else {

        console.log(false);

    }

};

oneOddOneEven(34);
