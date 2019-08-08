let charProgressBar = function (char, num) {
    let numQuotient = num / 10,
        progressBar = "|";

    for (let i = 0; i < 10; i++) {
        if (i < numQuotient) {
            progressBar += `${char}`;
        } else {
            progressBar += " ";
        }
    }

    if (num < 100) {
        progressBar += `| Progress: ${num}%`;
        console.log(progressBar);
    } else {
        progressBar += `| Completed!`;
        console.log(progressBar);
    }

};

charProgressBar("^", 80);
