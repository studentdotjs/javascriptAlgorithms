let reverseBoolValue = function (value) {
    let reversedValue = null;

    if (value === true) {
        reversedValue = false;
    } else if (value === false) {
        reversedValue = true;
    } else {
        reversedValue = "boolean expected";
    }

    console.log(reversedValue);

};

reverseBoolValue(5);
