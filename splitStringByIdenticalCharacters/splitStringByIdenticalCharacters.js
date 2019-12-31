let splitIdenticalChars = function (str) {
    let charClusterGroup = [];

    for (let i = 0; i < str.length;) {
        let currentChar = str[i],
            charCount = 0;

        while (currentChar === str[i]) {
            charCount++;
            i++;
        }

        charClusterGroup.push(currentChar.repeat(charCount));

    }

    console.log(`After splitting "${str}" into an array of  identical clusters we have [${charClusterGroup}].`);

};

splitIdenticalChars("77773331199999");
