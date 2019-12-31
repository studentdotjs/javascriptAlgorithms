let lastItemMatchesRest = function (arr) {
    let i = null,
        lastElement = arr[arr.length - 1],
        arrLength = arr.length - 1;

    for (i = 0; i < arrLength; i++) {
        if (lastElement.includes(arr[i])) {
            lastElement = lastElement.split("");
            lastElement.splice(0, String(arr[i]).length);
            lastElement = lastElement.join("");
        } else {
            console.log(`${false}, "${arr[i]}", does not matches in the "${arr[arr.length - 1]}".`);
            break;
        }
    }

    if (lastElement.length === 0 && i === arrLength) {
        console.log(`${true}, "${arr[arr.length - 1]}" matches rest of the [${arr}] items.`);
    }

};

lastItemMatchesRest(["ja", "va", "scr", "ipt", "javascript"]);
