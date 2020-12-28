let lengthOfStr = (str) => {

	let strSplit = str.split(""),
		strLength = 0;

	strSplit.forEach(function (char) {

		strLength++;

	});

	console.log(strLength);

};

lengthOfStr("Good Morning");
