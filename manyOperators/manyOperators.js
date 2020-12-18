const doBasicMath = (num1, num2, strOperator) => {

	let answer = null;

	switch (strOperator) {

		case "+":
			answer = num1 + num2;
			break;

		case "-":
			answer = num1 - num2;
			break;

		case "*":
			answer = num1 * num2;
			break;

		case "/":
			answer = num1 / num2;
			break;

		default:
			answer = num1 % num2;
			break;
	}

	console.log(answer);

};

doBasicMath(17, 14, "*");
