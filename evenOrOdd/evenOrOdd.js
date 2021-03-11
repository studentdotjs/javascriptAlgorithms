const evenOrOddTotal = (intArr) => {

    let total = 0;

    if (intArr.length > 0) {

        for (let i = 0; i < intArr.length; i++) {

            total = total + intArr[i];

        }

    }

    const answer = total % 2 === 0 ? "even" : "odd";

    console.log(answer);

};

evenOrOddTotal([11, 3, 3, 11, 20, 21]);
