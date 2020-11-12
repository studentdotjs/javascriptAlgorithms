const findIntFromWord = (word) => {

    let answer = null;

    switch (word) {

        case "one":
            answer = 1;
            break;

        case "two":
            answer = 2;
            break;

        case "three":
            answer = 3;
            break;

        case "four":
            answer = 4;
            break;

        case "five":
            answer = 5;
            break;

        case "six":
            answer = 6;
            break;

        case "seven":
            answer = 7;
            break;

        case "eight":
            answer = 8;
            break;

        case "nine":
            answer = 9;
            break;

        case "zero":
            answer = 0;
            break;
    }

    console.log(answer);

};

findIntFromWord("eight");
