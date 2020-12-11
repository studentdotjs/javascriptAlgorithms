const findArrInt = (intArr, expression) => {

	let corrEquValue = Math.floor(expression),
		corrArrInt = intArr[corrEquValue];

	console.log(corrArrInt);

};

findArrInt([15, 42, 11, 12, 20], 24 / 11);
