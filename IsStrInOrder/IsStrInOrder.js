let isInOrderOrNot = function (str) {

    if (str === str.split("").sort().join("")) {
        console.log(`${true}, the characters of "${str}" are in order.`);
    } else {
        console.log(`${false}, the characters of "${str}" are not in order.`);
    }

};

isInOrderOrNot("javascript");
