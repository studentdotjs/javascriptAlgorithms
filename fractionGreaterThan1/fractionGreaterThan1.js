let fracGreaterThan1 = function (fracStr) {
    let fracSplit = fracStr.split("/");

    if (fracSplit[0] / fracSplit[1] > 1) {
        console.log(true);
    } else {
        console.log(false);
    }

};

fracGreaterThan1("32/5");
