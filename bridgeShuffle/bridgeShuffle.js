let bridgeShuffle = function (arr1, arr2) {
    let shuffledBridge = [],
        bridgeLength = arr1.length >= arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i < bridgeLength; i++) {
        shuffledBridge.push(arr1[i], arr2[i]);
        let indexOfUndefined = shuffledBridge.indexOf(undefined);

        if (shuffledBridge.includes(undefined)) {
            shuffledBridge.splice(indexOfUndefined, 1);
        }

    }

    console.log(shuffledBridge);

};

bridgeShuffle(["N", "A", "V", "E", "E", "N"], [23, 7, 19, 96]);
