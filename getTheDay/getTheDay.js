let getDay = function (date) {
    let dayAsNumber = new Date(date).getDay(),
        day = null;

    switch (dayAsNumber) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        default:
            day = "Satuarday";
            break;
    }

    console.log(`On ${date} is ${day}.`);

};

getDay("7/26/2020");
