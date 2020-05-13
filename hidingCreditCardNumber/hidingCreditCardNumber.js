let hideCreditCardNum = function (creditCardNumber) {
    let totalHiddenNumbers = creditCardNumber.length - 4;

    for (let i = 0; i < totalHiddenNumbers; i++) {
        creditCardNumber = creditCardNumber.replace(creditCardNumber[i], "*");
    }

    console.log(creditCardNumber);

};

hideCreditCardNum("7060609349269308");
