let boomIntensity = function (n) {
    let answer = null,
        nIntensity = 'o'.repeat(n);

    if (n >= 2) {

        if (n % 2 === 0 && n % 5 === 0) {

            answer = 'B' + nIntensity.toUpperCase() + 'M!';

        } else if (n % 2 === 0) {

            answer = 'B' + nIntensity + 'm!';

        } else if (n % 5 === 0) {

            answer = 'B' + nIntensity.toUpperCase() + 'M';

        } else {

            answer = 'B' + nIntensity + 'm';

        }

    } else {

        answer = 'boom';

    }

    console.log(answer);

};

boomIntensity(34);
