const countCapitalLetters = (strArr) => {

	let totalCapitalLetters = 0;

	for (let i = 0; i < strArr.length; i++) {

		for (let j = 0; j < strArr[i].length; j++) {

			if (strArr[i][j] === strArr[i][j].toUpperCase()) {

				totalCapitalLetters++;

			}

		}

	}

	console.log(totalCapitalLetters);

};

countCapitalLetters(["MornINg", "TEn", "FifTy", "eigHT"]);
