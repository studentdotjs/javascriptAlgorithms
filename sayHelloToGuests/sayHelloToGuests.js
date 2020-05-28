let greetProple = function (guestNameArr) {
    let greetPropleArr = [],
        greetPeopleStr = "";

    if (guestNameArr.length > 0) {
        guestNameArr.forEach(function (guestName) {
            greetPropleArr.push(" " + `Hello ${guestName}`);
        });
    } else {
        console.log(greetPeopleStr);
    }

    greetPeopleStr = String(greetPropleArr);
    greetPeopleStr = greetPeopleStr.trimStart();
    console.log(greetPeopleStr);

};

greetProple(["Naveen", "Tanuj", "Ravi"]);
