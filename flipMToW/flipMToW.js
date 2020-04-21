let flipMToW = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "M") {
            str = str.replace("M", "W");
        }
    }

    console.log(str);

};

flipMToW("I AM A JAVASCRIPT DEVELOPER.");
