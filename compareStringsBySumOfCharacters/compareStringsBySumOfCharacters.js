function compareStringsBySumOfChars(str1, str2) {
    let str1Length = str1.split("");
    let str2Length = str2.split("");

    if (str1.length === str2.length) {
        console.log(`The total number of characters in the first string '${str1}' is 'equal' to the second string '${str2}'.`);
    } else {
        console.log(`The total number of characters in the first string '${str1}' is 'not equal' to the second string '${str2}'.`);
    }
}

compareStringsBySumOfChars("hello", "world");
