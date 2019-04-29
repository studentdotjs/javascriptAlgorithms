function singularOrPlural(word) {
    let separatedChars = word.split("").join(" ");
    if (separatedChars.endsWith('s')) {
        console.log(`${word} is a plural word.`);
    } else {
        console.log(`${word} is a singular word.`);
    }
}

singularOrPlural('magic');
