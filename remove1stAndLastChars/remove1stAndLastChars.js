function remove1stAndLastChars(str) {
    if (str.length > 2) {
        let splitStr = str.split("");
        splitStr.shift();
        splitStr.pop();
        let newStr = splitStr.join("");
        console.log(`After removing first and last characters from '${str}' we have '${newStr}'.`);
    } else {
        console.log(`'${str}' string's length is not more than two, therefore full string itself is shown in the console.`)
    }
}

remove1stAndLastChars('ok');
