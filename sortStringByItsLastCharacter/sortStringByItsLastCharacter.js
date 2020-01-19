let sortByLastChar = function (str) {
    let lastCharsSortedArr = [],
        strSplit = str.split(" "),
        sortedArr = [];

    strSplit.forEach(function (word) {
        lastCharsSortedArr.push(word.charAt(word.length - 1));
        lastCharsSortedArr.sort();
    });

    for (let i = 0; i < lastCharsSortedArr.length; i++) {

        for (let j = 0; j < strSplit.length; j++) {
            if (strSplit[j].endsWith(lastCharsSortedArr[i]) && sortedArr.indexOf(strSplit[j]) === -1) {
                sortedArr.push(strSplit[j]);
            }
        }

    }

    sortedArr = sortedArr.join(" ");

    console.log(`After sorting the "${str}" alphabetically by the last character of each word we have "${sortedArr}".`);

};

sortByLastChar("naveen sharma is a javascript developer");
