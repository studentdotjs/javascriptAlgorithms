let convertTimeIn24HourFormat = function (twelveHourFormatTime) {
    let timeIn24HourFormat = twelveHourFormatTime.slice(0, twelveHourFormatTime.length - 2).split(":");

    let hour = timeIn24HourFormat.shift();

    if (hour < 12 && twelveHourFormatTime.endsWith("PM")) {
        timeIn24HourFormat.unshift(String(parseInt(hour) + 12));
    } else if (hour == 12 && twelveHourFormatTime.endsWith("AM")) {
        timeIn24HourFormat.unshift("00");
    } else {
        timeIn24HourFormat.unshift(String(hour));
    }

    timeIn24HourFormat = timeIn24HourFormat.join(":");
    console.log(`After converting 12-Hour time format "${twelveHourFormatTime}" into 24-Hour time format we have "${timeIn24HourFormat}".`);

};

convertTimeIn24HourFormat("2:23:26PM");
