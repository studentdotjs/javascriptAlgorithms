const concatAndRepeatFirst3StrChars = (str) => {

	let repeatedStr = str.length >= 3 ? str.slice(0, 3).repeat(3) : str.slice(0, str.length).repeat(3);

	console.log(repeatedStr);

};

concatAndRepeatFirst3StrChars("javascript");
