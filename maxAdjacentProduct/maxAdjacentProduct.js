let maximumAdjacentProduct = function (intArr) {
    let currentProduct = null,
        maximumProduct = null,
        previousProduct = null;

    for (let i = 0; i < intArr.length - 1; i++) {
        currentProduct = intArr[i] * intArr[i + 1];

        if (i === 0) {
            previousProduct = currentProduct;
            maximumProduct = currentProduct;
            continue;
        }

        if (currentProduct > previousProduct) {
            if (currentProduct > maximumProduct) {
                maximumProduct = currentProduct;
            } else if (previousProduct > maximumProduct) {
                maximumProduct = previousProduct;
            }
        }

    }

    console.log(`In [${intArr}] the largest product of an adjacent pair is ${maximumProduct}.`);

};

maximumAdjacentProduct([12, 53, 17, -11, 20, -19]);
