function profitableGamble(winProbability, prize, pay) {
    let netProfitOrNetLoss = winProbability * prize - pay;
    if (netProfitOrNetLoss > pay) {
        console.log(`The user has gained Net Profit of ${netProfitOrNetLoss}.`);
    } else {
        console.log(`The user has gained Net Loss of ${netProfitOrNetLoss}.`);
    }
}

profitableGamble(0.5, 100, 10);
