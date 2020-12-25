const addEverything = (numArr) => {

	let answer = 0;

	numArr.forEach(function (num) {

		answer = answer + num;

	});

	console.log(answer);

};

addEverything([-11, 59, 25, -12]);
