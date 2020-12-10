const findLonelyInt = (intArr) => {

	let lonelyInt = null;

	for (let i = 0; i < intArr.length; i++) {

		if (intArr[i] > 0) {

			if (intArr.includes(0 - intArr[i])) {

				continue;

			} else {

				lonelyInt = intArr[i];

				break;

			}

		} else {

			if (intArr.includes(Math.abs(intArr[i]))) {

				continue;

			} else {

				lonelyInt = intArr[i];

				break;

			}

		}

	}

	console.log(lonelyInt);

};

findLonelyInt([16, -5, -16, 5, 10]);
