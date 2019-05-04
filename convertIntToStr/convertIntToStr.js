function intToStr(integer) {
    console.log(`Before Conversion ${integer}.`);
    console.log(`Begore Conversion typeof ${integer} is ${typeof integer}.`);
    integer = integer.toString();
    console.log(`After Conversion "${integer}"`);
    console.log(`After Conversion typeof "${integer}" is ${typeof integer}.`);
}

intToStr(22);
