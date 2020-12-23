const findoutlierInteger = (intArr) => {

	let evenIntArr = [],
		oddIntArr = [],
		outlierInt = null;

	intArr.forEach(function (int) {

		int % 2 === 0 ? evenIntArr.push(int) : oddIntArr.push(int);

	});

	outlierInt = evenIntArr.length === 1 ? evenIntArr[0] : oddIntArr[0];

	console.log(outlierInt);

};

findoutlierInteger([15, 55, 12]);
