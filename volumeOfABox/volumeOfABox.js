let volumeOfTheBox = function (objBox) {
    let volumeObjBox = objBox.width * objBox.length * objBox.height;

    console.log(`Volume of the box is ${volumeObjBox}.`);

};

volumeOfTheBox({
    width: 5,
    length: 6,
    height: 10
});
