const plus1Table = (nInt) => {

    let newTable = [];

    for (let i = 1; i <= 10; i++) {

        let currValue = nInt * i + 1;

        newTable.push(currValue);

    }

    newTable = newTable.join(" ");

    console.log(newTable);

};

plus1Table(2021);
