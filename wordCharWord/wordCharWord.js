const wordCharWord = (char, str) => {

    let newStr = str.split(" ").join(char);

    console.log(newStr);

};

wordCharWord("$", "i love javascript");
