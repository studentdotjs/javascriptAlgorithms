let capitalizeNames = function (nameArr) {
    let capitalizeNamesArr = [],
        upperCaseChar = null,
        lowerCaseChar = null;

    nameArr.forEach(function (name) {
        upperCaseChar = name.slice(0, 1).toUpperCase();
        lowerCaseChar = name.slice(1, name.length).toLowerCase();
        capitalizeNamesArr.push(upperCaseChar.concat(lowerCaseChar));
    })

    console.log(`Capitalization of [${nameArr}] array's elements is [${capitalizeNamesArr}].`);
};

capitalizeNames(["naveen", "RAVI", "Suresh", "rAM", "KAvi"]);
