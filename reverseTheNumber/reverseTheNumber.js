let reverseInt = function (int) {
    let intCopy = int;

    if (intCopy < 0) {
        intCopy = Math.abs(intCopy);
    }

    intCopy = String(intCopy).split("").reverse().join("");

    console.log(`Reverse of ${int} is ${intCopy}.`);

};

reverseInt(-5121);
