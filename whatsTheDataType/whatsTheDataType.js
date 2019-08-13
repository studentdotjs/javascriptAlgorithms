let dataTypeOfValue = function (value) {

    if (typeof value === "object") {
        if (value === null) {
            console.log("null");
        } else if (value.length >= 0) {
            console.log("array");
        } else if (isNaN(value) === true) {
            console.log("object");
        } else {
            console.log("date");
        }
    } else {
        console.log(typeof value);
    }

};

dataTypeOfValue(new Date());
