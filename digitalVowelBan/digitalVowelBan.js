let vowelBanDeleteDigit = function (int, banVowel) {
    let countArr = [
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"]
  ];

    unBannedInt = "";

    String(int).split("").forEach(function (int) {

        countArr.forEach(function (subArr) {
            if (subArr.includes(Number(int)) && subArr[1].indexOf(banVowel) === -1) {
                unBannedInt += int;
            }
        });

    });

    if (unBannedInt.length === 0) {
        console.log(`${int} is a Banned Number.`);
    } else {
        parseInt(unBannedInt);
        console.log(`After banning digits of ${int} we have ${unBannedInt}.`);
    }


};

vowelBanDeleteDigit(150431122019, "e");
