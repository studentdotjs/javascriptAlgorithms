let istotalAreaSame = function (cpArr1, cpArr2) {
    let cpArr1AreaTotal = 0,
        cpArr2AreaTotal = 0,
        multiplycpArr1 = 1,
        multiplycpArr2 = 1;

    for (let i = 0; i < cpArr1.length; i++) {
        for (let j = 0; j < cpArr1[i].length; j++) {
            multiplycpArr1 = multiplycpArr1 * cpArr1[i][j];
        }
        cpArr1AreaTotal = cpArr1AreaTotal + multiplycpArr1;
        multiplycpArr1 = 1;
    }

    for (let i = 0; i < cpArr2.length; i++) {
        for (let j = 0; j < cpArr2[i].length; j++) {
            multiplycpArr2 = multiplycpArr2 * cpArr2[i][j];
        }
        cpArr2AreaTotal = cpArr2AreaTotal + multiplycpArr2;
        multiplycpArr2 = 1;
    }

    if (cpArr1AreaTotal === cpArr2AreaTotal) {
        console.log(true);
    } else {
        console.log(false);
    }

}

istotalAreaSame([[2, 2], [4, 2]], [[6, 2]]);
