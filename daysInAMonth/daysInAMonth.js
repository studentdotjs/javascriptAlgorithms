let daysInAMonth = function (month, year) {
    let days = null;

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else if (month !== 2) {
        days = 31;
    } else if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                days = 29;
            } else {
                days = 28;
            }
        } else {
            days = 29;
        }
    } else {
        days = 28;
    }

    console.log(`In year ${year}'s ${month} month there will be ${days} days.`);

};

daysInAMonth(2, 1600);
