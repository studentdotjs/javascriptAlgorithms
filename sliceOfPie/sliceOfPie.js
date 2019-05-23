function equalSliceOfPie(totalSlices, recipients, perPersonSlices) {
    if (totalSlices >= recipients * perPersonSlices) {
        console.log(`There are ${totalSlices} slices of pie, so it's 'possible' to split pie in every ${recipients} recipients of ${perPersonSlices} slice each.`);
    } else {
        console.log(`There are ${totalSlices} slices of pie, so it's 'not possible' to split pie in every ${recipients} recipients of ${perPersonSlices} slice each.`);
    }
}

equalSliceOfPie(24, 8, 3);
