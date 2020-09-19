let naveenWinsOrNot = function (naveensSnails, raghusSnails) {
    let totalWins = 0;

    if (naveensSnails[0] > raghusSnails[2]) {

        totalWins++;

        if (naveensSnails[1] > raghusSnails[0]) {

            totalWins++;

        } else if (naveensSnails[2] > raghusSnails[1]) {

            totalWins++;

        }

    } else if (naveensSnails[1] > raghusSnails[0] && naveensSnails[2] > raghusSnails[1]) {

        totalWins += 2;

    }

    if (totalWins >= 2) {

        console.log(true);

    } else {

        console.log(false);

    }


};

naveenWinsOrNot([1, 8, 20], [2, 9, 100]);
