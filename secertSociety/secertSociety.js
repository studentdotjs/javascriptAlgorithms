let secertSocietyName = function (friendsArr) {
    let secertSociety = "";
    for (let i = 0; i < friendsArr.length; i++) {
        secertSociety += friendsArr[i].slice(0, 1);
    }
    secertSociety = secertSociety.split("").sort().join("").toUpperCase();
    console.log(`The name of [${friendsArr}] array Secrty Society is '${secertSociety}'.`);
}

secertSocietyName(['naveen', 'mahaveer', 'manish', 'prabhjeet', 'nandkishor']);
