const convertIntToStr = (intAndStrArr) => {

    let newArr = [];

    intAndStrArr.forEach(function (element) {

        Number.isInteger(element) === true ? newArr.push(String(element)) : newArr.push(element);

    });

    console.log(newArr);

};

convertIntToStr([9, "friday", 26, "mmorning", "november"]);
