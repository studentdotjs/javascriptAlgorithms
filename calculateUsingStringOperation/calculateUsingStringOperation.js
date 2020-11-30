const calculateExpression = (int1, int2, strOperator) => {

    let answer = null;

    switch (strOperator) {

        case "+":

            answer = int1 + int2;

            break;

        case "-":

            answer = int1 - int2;

            break;

        case "*":

            answer = int1 * int2;

            break;

        case "/":

            answer = int1 / int2;

            break;

        default:

            answer = int1 % int2;

            break;

    }

    console.log(answer);

};

calculateExpression(20, 51, "+");
