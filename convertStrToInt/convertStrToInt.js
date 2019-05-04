function strToInt(str) {
    console.log(`Before Conversion : "${str}".`);
    console.log(`Before conversion the typeof "${str}" is ${typeof str}.`);
    str = parseInt(str);
    console.log(`After Conversion : ${str}`);
    console.log(`After conversion the typeof ${str} is : ${typeof str}.`);
}

strToInt("1996");
