let sortByStrLetter = function (arr) {
    let letters = "abcdefghijklmnopqrstuvwxyz",
        argLettrsArr = [],
        newSortedArr = [];

    arr.forEach(function (element) {
        let currentElementSplit = element.split("");

        currentElementSplit.forEach(function (char) {
            if (letters.includes(char)) {
                argLettrsArr.push(char);
            }
        });

    });

    argLettrsArr.sort();

    argLettrsArr.forEach(function (char) {

        arr.forEach(function (element) {
            if (element.includes(char)) {
                newSortedArr.push(element);
            }
        });

    });

    console.log(`After sorting each string of the [${arr}] in alphabetic ascending order we have [${newSortedArr}].`);

};

sortByStrLetter(["932c", "832u32", "2344b"]);
