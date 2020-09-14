let getDecimalPlaces = function (strNumber) {
    let indexOfDecimalPoint = strNumber.indexOf("."),
        decimalPlacesAfterDecimalPoint = null;

    if (indexOfDecimalPoint === -1) {

        decimalPlacesAfterDecimalPoint = 0;
    } else {

        decimalPlacesAfterDecimalPoint = strNumber.slice(indexOfDecimalPoint + 1).length;

    }

    console.log(decimalPlacesAfterDecimalPoint);

};

getDecimalPlaces("11.32");
