let sortNumsInDescending = function (int) {
    let intToStrSplit = String(int).split(""),
        descendInt = Number(intToStrSplit.sort(function (a, b) {
            return b - a;
        }).join(""));

    console.log(descendInt);

};

sortNumsInDescending(45414420201);
