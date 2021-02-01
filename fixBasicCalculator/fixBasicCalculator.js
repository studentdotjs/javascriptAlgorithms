const fixingBasicCalculator = (num1, operator, num2) => {

    let answer = null,
        operators = "+-*/";

    if (num1 !== 0 && num2 !== 0 && operators.indexOf(operator) !== -1) {

        switch (operator) {

            case "+":
                answer = num1 + num2;
                break;

            case "-":
                answer = num1 - num2;
                break;

            case "*":
                answer = num1 * num2;
                break;

            default:
                answer = num1 / num2;
                break;

        }

    }

    console.log(answer);

};

fixingBasicCalculator(9, "+", 26);
