let allAboutStr = function (str) {
    let strInfoArr = [],
        strMiddleChar = str.length / 2,
        secondChar = str[1],
        secondCharOccureceCount = 1,
        secondCharIndex = str.indexOf(secondChar);

    strInfoArr.push(str.length, str[0], str.charAt(str.length - 1));

    if (str.length % 2 !== 0) {
        strInfoArr.push(str[Math.floor(strMiddleChar)]);
    } else {
        strInfoArr.push(str.slice(strMiddleChar - 1, strMiddleChar + 1));
    }

    while (secondCharOccureceCount !== 2) {
        secondCharOccureceCount++;
        secondCharIndex = str.indexOf(secondChar, secondCharIndex + 1);
    }

    if (secondCharIndex === -1) {
        strInfoArr.push(`not found`);
    } else {
        strInfoArr.push(`@ index ${secondCharIndex}`);
    }

    console.log(strInfoArr);

};

allAboutStr("spring");
