let returnInitials = function (fullNameArr) {
    let fullNameinitials = [],
        splitFullName = [],
        nameInitials = "";

    for (let i = 0; i < fullNameArr.length; i++) {
        splitFullName[i] = fullNameArr[i].split(" ");

        for (var j = 0; j < splitFullName[i].length; j++) {
            nameInitials += splitFullName[i][j].slice(0, 1).toUpperCase().concat(". ");
        }

        fullNameinitials[i] = nameInitials.trimRight();
        nameInitials = [];
    }

    console.log(`Initials of every name in [${fullNameArr}] array is [${fullNameinitials}].`);
};

returnInitials(["naveen sharma", "Rajesh Prasad Sharma", "TANUJ SHARMA"]);
