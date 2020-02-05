let oldestPersonName = function (obj) {
    let oldestAge = 0,
        oldestPerson = null;

    for (let name in obj) {
        if (obj[name] > oldestAge) {
            oldestAge = obj[name];
            oldestPerson = name;
        }
    }

    console.log(`Name of the oldest person is "${oldestPerson}".`);

};

oldestPersonName({
    Naveen: 23,
    Tanuj: 20,
    Praveen: 45,
    Kushal: 30
});
