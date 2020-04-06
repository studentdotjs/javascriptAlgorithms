let letterCounter = function (arrs, letter) {
    let totalNumOfLetter = 0;

    arrs.forEach(function (arr) {

        arr.forEach(function (char) {
            if (char === letter) {
                totalNumOfLetter++;
            }
        });

    });

    console.log(`Total number of "${letter}" are ${totalNumOfLetter}.`);

};

letterCounter([
  ["N", "E", "Y", "H", "A", "N"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["N", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["N", "X", "N", "A", "S", "S"]
], "N");
