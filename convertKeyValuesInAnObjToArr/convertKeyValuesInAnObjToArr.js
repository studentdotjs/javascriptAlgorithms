let objPropToSubArr = function (obj) {
    let mainArr = [];

    for (let key in obj) {
        mainArr.push([key, obj[key]]);
    }

    console.log(mainArr);

};

objPropToSubArr({
    "a": 1,
    "b": 2,
    "c": 3
});
