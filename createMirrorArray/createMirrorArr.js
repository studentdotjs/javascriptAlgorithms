const createMirrorArr = (intArr) => {

    let mirrorArr = intArr.concat(intArr.slice(0, intArr.length - 1).reverse());

    console.log(mirrorArr);

};

createMirrorArr([20, 37, 2, 12, 20]);
