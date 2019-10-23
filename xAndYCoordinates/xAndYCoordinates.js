let convertInArrcoordinates = function (xCoordinatesArr, yCoordinatesArr) {
    let xyCoordinatesArr = [];

    for (let i = 0; i < xCoordinatesArr.length; i++) {
        xyCoordinatesArr.push([xCoordinatesArr[i], yCoordinatesArr[i]]);
    }

    console.log(xyCoordinatesArr);

};

convertInArrcoordinates([17, 20, 23, 10, 19], [4, 20, 26, 28, 40]);
