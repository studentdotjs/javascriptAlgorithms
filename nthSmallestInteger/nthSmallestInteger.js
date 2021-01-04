const findNthSmallestInt = (intArr, n) => {

	let nSmallestInt = null;

	if (intArr.length >= n) {

		for (let i = 0; i < n; i++) {

			nSmallestInt = Math.min(...intArr);

			intArr.splice(intArr.indexOf(nSmallestInt), 1);

		}

	}

	console.log(nSmallestInt);

};

findNthSmallestInt([11, 29, 4, 1, 20], 3);
