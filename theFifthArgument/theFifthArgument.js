const typeOf5thArg = (...args) => {

	let answer = null;

	answer = args.length >= 5 ? typeof (args[4]) : "Not Enough Arguments";

	console.log(answer);

};

typeOf5thArg(1, 2, 3, 4, 5);
