let countDigitOccurrences = function (minInt, maxInt, digit) {
    let digitCount = 0;

    for (let i = minInt; i <= maxInt; i++) {
        let currentIntSplit = String(Math.abs(i)).split("");

        currentIntSplit.forEach(function (int) {
            if (Number(int) === digit) {
                digitCount++;
            }
        });

    }

    console.log(`In range of ${minInt} and ${maxInt}, ${digit} comes ${digitCount} times.`);

};

countDigitOccurrences(9, 42, 3);
