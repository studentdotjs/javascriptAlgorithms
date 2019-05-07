function hasAnySpaces(str) {
    let separatedChars = str.split("");
    if (separatedChars.includes(" ")) {
        console.log(`YES '${str}' string does contain spaces.`);
    } else {
        console.log(`NO '${str}' string does not contains any spaces.`);
    }
}

hasAnySpaces("I love my india.");
