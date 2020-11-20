const true1False0 = (strInt) => {

    let boolArr = [];

    for (let i = 0; i < strInt.length; i++) {

        strInt[i] === "1" ? boolArr.push(true) : boolArr.push(false);

    }

    console.log(boolArr);

};

true1False0("010111000");
