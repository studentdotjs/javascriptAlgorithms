const swapNums = (num1, num2) => {

    const numCopy = num1,
        swapNumArr = [];

    num1 = num2;

    num2 = numCopy;

    swapNumArr.push(num1, num2);

    console.log(swapNumArr);

};

swapNums(4, 46);
