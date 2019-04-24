function totalLegsInFarm(chickens, cows, pigs) {
    let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
    console.log(`There is a total of ${totalLegs} legs of the animals on the farm.`);
}

totalLegsInFarm(5, 2, 8);
