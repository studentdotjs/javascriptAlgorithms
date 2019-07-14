let isAutomorphicOrNot = function (number) {
    let numSquare = number * number;

    if (numSquare.toString().endsWith(number)) {
        console.log(`${number} is an 'Automorphic' Number.`);
    } else {
        console.log(`${number} is not an 'Automorphic' Number.`);
    }

};

isAutomorphicOrNot(13);
