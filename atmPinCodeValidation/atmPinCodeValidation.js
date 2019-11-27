let validAtmPinOrNot = function (atmPin) {
    let digits = "0123456789",
        i = null;

    if (atmPin.length === 4 || atmPin.length === 6) {

        for (i = 0; i < atmPin.length; i++) {
            if (digits.indexOf(atmPin[i]) === -1) {
                console.log(`${false}, ${atmPin} containes invalid character, so this is invalid atm pin.`);
                break;
            }
        }

    } else {
        console.log(`${false}, length of atm pin is inaccurate.`);
    }

    if (i === atmPin.length) {
        console.log(`${true}, ${atmPin} is a valid atm pin.`);
    }

};

validAtmPinOrNot("951411");
