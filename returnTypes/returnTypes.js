const typeOfArrEveryElement = (arr) => {

    const typeArr = [];

    arr.forEach(function (element) {

        typeArr.push(typeof (element));

    });

    console.log(typeArr);

};

typeOfArrEveryElement([8, "00", false, ["morning"], 2.14]);
