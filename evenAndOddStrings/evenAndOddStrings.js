const evenOddStr = (str) => {

    let newStr = null,
        evenPosStr = "",
        oddPosStr = "";

    for (let i = 0; i < str.length; i++) {

        i % 2 === 0 ? evenPosStr += str[i] : oddPosStr += str[i];

    }

    newStr = evenPosStr.concat(" ", oddPosStr);

    console.log(newStr);

};

evenOddStr('javascript');
