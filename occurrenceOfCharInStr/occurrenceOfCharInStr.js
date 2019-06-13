let charInstance = function (char, str) {
    let splitStr = str.split(""),
        charOccurence = 0;

    splitStr.forEach(function (value) {
        if (value === char) {
            charOccurence++;
        }
    })

    if (charOccurence > 0) {
        console.log(`In '${str}' '${char}' is occurred for ${charOccurence} Times.`);
    } else {
        console.log(`In '${str}' '${char}' is not even occurred for 'One Time'.`);
    }

};

charInstance('a', 'javascript');
