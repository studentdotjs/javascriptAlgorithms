function getDiscounts(nums, d) {
    let discountNumArr = [],
        discountInt = d.split("");
    discountInt.pop();
    discountInt = discountInt.join("");

    nums.forEach(function (int) {
        let discount = int * discountInt / 100;
        discountNumArr.push(discount);
    });

    console.log(discountNumArr);

}

getDiscounts([9, 42, 14, 2, 20], "20%");
