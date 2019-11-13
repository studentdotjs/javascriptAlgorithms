let boxSequence = function (step) {
    let boxes = 0;

    for (let i = 0; i < step; i++) {
        if (i % 2 === 0) {
            boxes = boxes + 3;
        } else {
            boxes = boxes - 1;
        }
    }

    console.log(`Amount of boxes in ${step} step of sequence is ${boxes}.`);

};

boxSequence(23);
