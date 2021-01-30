const trimmedAverage = (intArr) => {

    let smallestInt = Math.min(...intArr),
        largestInt = Math.max(...intArr),
        sum = 0,
        count = 0,
        average = null;

    intArr.splice(intArr.indexOf(smallestInt), 1);

    intArr.splice(intArr.indexOf(largestInt), 1);

    intArr.forEach(function (int) {

        sum = sum + int;

        count++;

    });

    average = Math.round(sum / count);

    console.log(average);

};

trimmedAverage([9, 59, 30, 2021]);
