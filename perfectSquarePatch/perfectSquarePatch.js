let squarePatch = function (int) {
    let square = []

    for (let i = 0; i < int; i++) {
        square.push([]);
        for (let j = 0; j < int; j++) {
            square[i].push(int);
        }
    }

    console.log(square);

};

squarePatch(7);
