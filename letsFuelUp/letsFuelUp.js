const needOfFuel = (distance) => {

    let totalFuel = distance * 10;

    if (totalFuel < 100) {

        totalFuel = 100;

    }

    console.log(totalFuel);

};

needOfFuel(45);
