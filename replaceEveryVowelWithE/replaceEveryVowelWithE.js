const replaceEveryVowelWithE = (str) => {

    let vowels = "aiou",
        newStr = "";

    for (let i = 0; i < str.length; i++) {

        vowels.includes(str[i].toLowerCase()) === true ? newStr += "E" : newStr += str[i].toUpperCase();

    }

    console.log(newStr);

};

replaceEveryVowelWithE("My name is Naveen Sharma.");
