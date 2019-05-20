function concatReversedFullName(firstName, lastName) {
    let splitFname = firstName.split("");
    let splitLname = lastName.split("");

    let lastNameJoin = splitLname.join("");
    let firstNameJoin = splitFname.join("");
    let reversedFullName = lastName.concat(", ", firstNameJoin);
    console.log(reversedFullName);
}

concatReversedFullName("Naveen", "Sharma");
