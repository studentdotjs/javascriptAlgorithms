let formatDate = function (strDate) {
    let formattedDate = strDate.split("/").reverse().join("");
    console.log(formattedDate);
};

formatDate("04/04/2020");
