let remixStr = function (word, intArr) {
    let remixedStr = "";

    for (let i = 0; i < word.length; i++) {
        let index = intArr.indexOf(i);
        remixedStr += word.charAt(index);
    }

    console.log(`After remixing "${word}" into [${intArr}] index formet we have "${remixedStr}".`);

};

remixStr("javascript", [8, 0, 2, 4, 7, 1, 5, 3, 9]);
