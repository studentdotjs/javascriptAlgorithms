let magicDatrOrNot = function (dateStr) {
    let dateArr = dateStr.split(" "),
        date = dateArr[0],
        month = dateArr[1],
        year = dateArr[2];

    if (String(date * month) === year[3]) {
        console.log(`${true}, "${dateStr}" is a magic date.`);
    } else if (String(date * month) === year.slice(2, year.length)) {
        console.log(`${true}, "${dateStr}" is a magic date.`);
    } else if (String(date * month) === year.slice(1, year.length)) {
        console.log(`${true}, "${dateStr}" is a magic date.`);
    } else {
        console.log(`${false}, "${dateStr}" is not a magic date.`);
    }

};

magicDatrOrNot("25 12 2019");
