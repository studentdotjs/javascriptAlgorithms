let filterOutStr = function (arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i])
        }
    }

    console.log(`After filtering string values from [${arr}] we have [${newArr}].`);

};

filterOutStr([5, 24, 13, "nine", "two"]);
