let removeDuplicates = function (arr) {
    let arrWithoutDuplicates = [];

    arr.forEach(function (element) {
        if (arrWithoutDuplicates.indexOf(element) === -1) {
            arrWithoutDuplicates.push(element);
        }
    });

    console.log(`After removing duplicates elements from [${arr}] we have [${arrWithoutDuplicates}].`);

};

removeDuplicates(["naveen", "sharma", "sharma", "naveen", "jaipur"]);
