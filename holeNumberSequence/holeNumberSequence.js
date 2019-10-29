let sumOfIntHoles = function (int) {
    let sum = 0;

    for (let i = 1; i <= int; i++) {

        let currentIntToStr = String(i).split("");

        for (let j = 0; j < currentIntToStr.length; j++) {
            if (currentIntToStr[j] == 0 || currentIntToStr[j] == 4 || currentIntToStr[j] == 6 || currentIntToStr[j] == 9) {
                sum++;
            } else if (currentIntToStr[j] == 8) {
                sum += 2;
            }
        }

    }

    console.log(`Sum of hole numbers from 1 to ${int} is ${sum}.`);

};

sumOfIntHoles(23);
