const sortLongStr = (str1, str2) => {

    let twoInOneStr = str1.concat(str2),
        newStr = [];

    for (let i = 0; i < twoInOneStr.length; i++) {

        if (newStr.includes(twoInOneStr[i]) === false) {

            newStr.push(twoInOneStr[i]);

        }

    }

    newStr = newStr.sort().join("");

    console.log(newStr);

};

sortLongStr("javascript", "python");
