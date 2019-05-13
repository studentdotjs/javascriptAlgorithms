function trueOnlySameCase(str) {
    let strUpperCase = str.toUpperCase();
    let strLowerCase = str.toLowerCase();
    if (str === strUpperCase || str === strLowerCase) {
        if (str === strUpperCase)
            console.log(`'True', ${str} is a 'Uppercase' string.`);
        else
            console.log(`True, ${str} is a 'Lowercase' String.`);
    } else {
        console.log(`False, ${str} is Not a Uppercase or not a LowerCase String.`);
    }
}

trueOnlySameCase("naveen");
