let validZipCode = function (zipCode) {
    let regEx = /^\d{5}$/,
        result = regEx.test(zipCode);

    result === true ? console.log(`${result}, "${zipCode}" is a valid zip code.`) : console.log(`${result}, "${zipCode}" is not a valid zip code.`);

};

validZipCode("53730");
