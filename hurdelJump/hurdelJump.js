function hurdleJump(hurdelArr, hurdler) {
    let i = 0;
    while (i < hurdelArr.length) {
        if (hurdler >= hurdelArr[i]) {
            i++;
        } else {
            console.log(`The hurdler ${hurdler} can not clear the [${hurdelArr}] hurdle.`);
            break;
        }
    }
    if (i === hurdelArr.length)
        console.log(`The hurdler ${hurdler} can clear the [${hurdelArr}] hurdle.`);
}

hurdleJump([21, 05, 19], 30);
