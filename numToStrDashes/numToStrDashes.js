function hyphensStr(number) {
    let dashesStr = '';
    for (let i = 0; i < number; i++) {
        dashesStr += '-';
    }
    console.log(`${number} dashes as string : ${dashesStr}`);
}

hyphensStr(23);
