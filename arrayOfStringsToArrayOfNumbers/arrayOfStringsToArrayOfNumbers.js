const convertStringifiedNums = (numArr) => {

    const newArr = [];

    numArr.forEach(function (num) {

        newArr.push(Number(num));

    });

    console.log(newArr);

};

convertStringifiedNums(["9", "35", "316", "20.21"]);
