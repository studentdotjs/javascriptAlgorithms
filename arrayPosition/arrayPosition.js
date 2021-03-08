const crePosStr = (twoDCharArr, posArr) => {

    let newStr = "";

    twoDCharArr = twoDCharArr.flat();

    for (let i = 0; i < posArr.length; i++) {

        newStr += twoDCharArr[posArr[i] - 1];

    }

    console.log(newStr);

};

crePosStr([['j', 'a', 'v', 'a', 's'], ['c', 'r', 'i', 'p', 't']], [5, 3, 8, 1]);
