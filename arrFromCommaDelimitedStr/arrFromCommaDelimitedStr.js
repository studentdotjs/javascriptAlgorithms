let strToArr = function (str) {
    let newArr = null;

    if (str.length === 0) {
        newArr = [];
    } else {
        newArr = str.split(", ");
    }

    console.log(newArr);

};

strToArr("satuarday, march, five, six, morning");
