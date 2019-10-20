let sortContactsByLastName = function (namesArr, order) {
    let lastNameArr = [],
        currentNameSplit = null,
        currentNamesLastName = null,
        sortedContactList = [];

    if (namesArr !== null && namesArr !== undefined) {

        namesArr.forEach(function (name) {
            currentNameSplit = name.split(" ");
            currentNamesLastName = currentNameSplit[currentNameSplit.length - 1];
            lastNameArr.push(currentNamesLastName);
        });

        if (order === "ASC") {
            lastNameArr.sort();

            lastNameArr.forEach(function (lastName) {
                namesArr.forEach(function (name) {
                    if (name.includes(lastName)) {
                        sortedContactList.push(name);
                    }
                });
            });

            console.log(`After sorting the names of [${namesArr}] into ascending order we have [${sortedContactList}].`);

        } else if (order === "DESC") {
            lastNameArr.sort().reverse();

            lastNameArr.forEach(function (lastName) {
                namesArr.forEach(function (name) {
                    if (name.includes(lastName)) {
                        sortedContactList.push(name);
                    }
                });
            });

            console.log(`After sorting the names of [${namesArr}] into descending order we have [${sortedContactList}].`);

        }

    } else {
        console.log(sortedContactList);
    }

};

sortContactsByLastName(["Naveen Sharma", "Aman Verma", "Virat Kohli"], 'ASC');
