let formatInContactNumber = function (numArr) {
    let first3Nums = numArr.slice(0, 3);
    first3Nums.unshift("(");
    first3Nums.push(")");
    first3Nums = first3Nums.join("") + (" ");


    let middle3Nums = numArr.slice(3, 6).join("") + ("-");

    let last4Nums = numArr.slice(6, numArr.length).join("");

    let contactNumber = first3Nums.concat(middle3Nums, last4Nums);

    console.log(`After converting [${numArr}] array into contact number = "${contactNumber}".`);
};

formatInContactNumber([7, 4, 8, 0, 0, 3, 1, 6, 2, 1]);
