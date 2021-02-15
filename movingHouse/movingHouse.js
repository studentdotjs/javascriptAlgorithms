const livingYearsInSameHouse = (age, timesMoved) => {

    const yearsSpentIn1House = Math.round(age / ++timesMoved);

    console.log(yearsSpentIn1House);

};

livingYearsInSameHouse(23, 1);
