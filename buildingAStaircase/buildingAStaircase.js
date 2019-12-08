let buildStairCase = function (height, block) {
    let stairCase = [],
        stepStairs = height;

    for (let i = 0; i < height; i++) {
        stairCase[i] = [];
        for (let j = 0; j < stepStairs; j++) {
            if (j <= i) {
                stairCase[i].push(block);
            } else {
                stairCase[i].push("_");
            }
        }
    }

    console.log(stairCase);

};

buildStairCase(5, "$");
