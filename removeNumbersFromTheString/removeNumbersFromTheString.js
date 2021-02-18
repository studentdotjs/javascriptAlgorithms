const remNum = (str) => {

    const nums = "0123456789";

    let strWithoutNums = "";

    for (let i = 0; i < str.length; i++) {

        if (nums.indexOf(str[i]) === -1) {

            strWithoutNums += str[i];

        }

    }

    console.log(strWithoutNums);

};

remNum("naveen23 sharma");
