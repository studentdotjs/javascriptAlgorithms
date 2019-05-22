function totalWordsInStr(str) {
    let totalWords = str.split(" ");
    console.log(`'${str}' string has total ${totalWords.length} words.`);
}

totalWordsInStr('I am learning javascript.');
