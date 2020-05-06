let diffMaxMin = function (numberArr) {
    let difference = Math.max(...numberArr) - Math.min(...numberArr);
    console.log(difference);
};

diffMaxMin([6, 41, -13, 20, -3, -40]);
