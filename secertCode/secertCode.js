let strToSecertCode = function (str) {
    let strSplit = str.split("");
    console.log(`Before converting into 'Secert Code' = "${str}"`);

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i] === 'a' || strSplit[i] === 'e' || strSplit[i] === 'i' || strSplit[i] === 'o' || strSplit[i] === 's') {
            if (strSplit[i] === 'a') {
                str = str.replace(strSplit[i], 4);
            } else if (strSplit[i] === 'e') {
                str = str.replace(strSplit[i], 3);
            } else if (strSplit[i] === 'i') {
                str = str.replace(strSplit[i], 1);
            } else if (strSplit[i] === 'o') {
                str = str.replace(strSplit[i], 0);
            } else if (strSplit[i] === 's') {
                str = str.replace(strSplit[i], 5);
            }
        }
    }

    console.log(`After converting into 'Secert Code' = "${str}"`);
};

strToSecertCode("naveen sharma");
