let countUniqueCharacters = function (str1, str2) {
    let totalUniqueCharacters = 0,
        combinedStr = str1.concat(str2),
        uniqueCharArr = [];

    for (let i = 0; i < combinedStr.length; i++) {
        if (uniqueCharArr.indexOf(combinedStr[i]) === -1) {
            totalUniqueCharacters++;
            uniqueCharArr.push(combinedStr[i])
        }
    }

    console.log(`Total number of unique characters from the combined string "${combinedStr}" is ${totalUniqueCharacters}.`);

};

countUniqueCharacters("tuesday", "twenty");
