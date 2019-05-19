function strangePairOrNot(str1, str2) {
    let str1Split = str1.split("");
    let str2Split = str2.split("");
    if (str1Split[0] === str2Split[str2Split.length - 1] && str1Split[str1Split.length - 1] === str2Split[0]) {
        console.log(`True, '${str1}' and '${str2}' are strange pair.`);
    } else {
        console.log(`False, '${str1}' and '${str2}' are not strange pair.`);
    }
}

strangePairOrNot('mint', 'trim');
