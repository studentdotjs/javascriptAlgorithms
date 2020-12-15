const incrementEveryInt = (intArr) => {

	let newIncrementedArr = [];

	intArr.forEach(function (int) {

		newIncrementedArr.push(++int);

	});

	console.log(newIncrementedArr);

};

incrementEveryInt([16, 40, 15, 1220]);
