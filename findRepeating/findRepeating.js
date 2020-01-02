let findRepeating = function (str) {
    let allInfos = [];

    for (let i = 0; i < str.length; i++) {
        let currentElement = str[i],
            currElConsecutive1stIndex = i,
            consecutiveRepetitionOfCurrEl = 1;

        while (str[i] === str[i + 1]) {
            consecutiveRepetitionOfCurrEl++;
            i++;
        }

        let currElConsecutiveLastIndex = i;

        allInfos.push([currentElement, currElConsecutive1stIndex, currElConsecutiveLastIndex, consecutiveRepetitionOfCurrEl]);
        consecutiveRepetitionOfCurrEl = 1;

    }

    console.log(allInfos);

};

findRepeating("mmmbbbaammbb");
