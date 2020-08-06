let getTotoalVolume = function (...boxes) {
    let totalVolume = 0;

    boxes.forEach(function (box) {

        let currentBoxVolume = 1;

        box.forEach(function (element) {
            currentBoxVolume = element * currentBoxVolume;
        });

        totalVolume = totalVolume + currentBoxVolume;

    });

    console.log(totalVolume);

};

getTotoalVolume([9, 12, 17], [4, 20, 20], [43, 46, 63]);
