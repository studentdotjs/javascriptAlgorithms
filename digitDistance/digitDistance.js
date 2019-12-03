let digitDistance = function (int1, int2) {
    let int1ToStr1 = String(int1).split(""),
        int2ToStr2 = String(int2).split(""),
        answer = 0;

    for (let i = 0; i < int1ToStr1.length; i++) {
        answer = answer + Math.abs(int1ToStr1[i] - int2ToStr2[i]);
    }

    console.log(`Digit distance between ${int1} and ${int2} is ${answer}.`);

};

digitDistance(234, 489);
