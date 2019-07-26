let strNPartition = function (str, n) {
    let strPartitionArr = [],
        strSplit = str.split("");

    for (let i = 0; strSplit.length !== 0; i++) {

        strPartitionArr[i] = strSplit.splice(0, n).join("");

    }

    console.log(`After partitioning "${str}" string into parts of size ${n}, we have [${strPartitionArr}] array".`);

};

strNPartition("tuesday", 2);
