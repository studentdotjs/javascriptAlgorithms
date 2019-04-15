function reversedString(sentence) {
    let words = sentence.split("");
    let reversedWords = words.reverse();
    let reversedStr = reversedWords.join("");
    console.log(`The reversed string of "${sentence}" is "${reversedStr}".`);
}

// Please Enter A String / Sentence

reversedString('i love my india');
