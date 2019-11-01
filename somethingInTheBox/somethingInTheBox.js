let inTheBoxOrNot = function (arr) {
    let i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes("*")) {
            console.log(`${true}, "*" is in the [${arr}] box.`);
            break;
        }
    }

    if (i === arr.length) {
        console.log(`${false}, "*" is not in the [${arr}] box.`);
    }

};

inTheBoxOrNot(["######", "#######", "####*###"]);
