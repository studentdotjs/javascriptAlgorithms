const shouldServeDrinks = (age, breakTime) => {

    let answer = age >= 18 && breakTime === false ? true : false;

    console.log(answer);

};

shouldServeDrinks(46, false);
