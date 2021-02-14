// 20.05.2019 - Using Function Declaration

function nextInteger(int) {

    let nextIncrementedInteger = int + 1;

    console.log(nextIncrementedInteger);

}

nextInteger(43);


// 14.02.2021 - Using Arrow Function

const integerPlus1 = (int) => {

    const nextIncrementedInteger = ++int;

    console.log(nextIncrementedInteger);

}

integerPlus1(2021);
