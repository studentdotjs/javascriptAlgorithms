let find2ndZip = function (str) {
    let zipOccurence = str.indexOf("zip"),
        count = 0;

    while (count !== 1) {
        count++;
        zipOccurence = str.indexOf("zip", zipOccurence + 1);
    }

    console.log(`Position of 2nd occurence of "zip" in the "${str}" is ${zipOccurence}.`);

};

find2ndZip("I do not know zipcode of jaipur");
