function countdownArr(num) {
    let numCopy = num;
    let countDownNumArr = [];
    for (let i = 0; i <= num; i++) {
        countDownNumArr[i] = numCopy;
        numCopy--;
    }
    console.log(`Countdown array of ${num} is [${countDownNumArr}] array.`);
}

countdownArr(23);
