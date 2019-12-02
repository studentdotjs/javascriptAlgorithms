let changeEnoughOrNot = function (changeArr, due) {
    let totalChange = (changeArr[0] * 0.25) + (changeArr[1] * 0.10) + (changeArr[2] * 0.05) + (changeArr[3] * 0.01);

    if (totalChange >= due) {
        console.log(`${true} you are able to pay for the item.`);
    } else {
        console.log(`${false} you are not able to pay for the item.`);
    }

};

changeEnoughOrNot([60, 10, 11, 20], 16.75);
