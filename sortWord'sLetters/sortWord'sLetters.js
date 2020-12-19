const sortWordLettersAlphabetically = (word) => {

	let sortedWord = String(word.split("").sort().join(""));

	console.log(sortedWord);

};

sortWordLettersAlphabetically("JavaScript");
