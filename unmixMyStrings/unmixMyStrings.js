let unmixStr = function (str) {
    let strSplit = str.split(""),
        newStr = "";

    for (let i = 0; i < str.length; i += 2) {

        if (str[i + 1] !== undefined && str[i] !== undefined) {
            newStr += str[i + 1] + str[i];
        } else {
            newStr += str[i];
        }

    }

    console.log(`After unmixing the "${str}" we have "${newStr}".`);

};

unmixStr(" imaa j vasarcpi tedevolep.r");
