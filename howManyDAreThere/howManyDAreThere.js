const totalDInStr = (str) => {

    let strInLowercase = str.toLowerCase(),
        totalD = 0;

    for (let i = 0; i < strInLowercase.length; i++) {

        if (strInLowercase[i] === "d") {

            totalD++;

        }

    }

    console.log(totalD);

};

totalDInStr("I went to the dentist for a check-up.");
