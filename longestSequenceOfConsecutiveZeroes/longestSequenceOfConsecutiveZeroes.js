let longestZeroSequence = function (binaryStr) {
    let currSeqCount = 0,
        seqCount = 0,
        longestSequence = "";

    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === "0") {
            while (binaryStr[i] === "0") {
                currSeqCount++;
                i++;
            }

            seqCount = currSeqCount > seqCount ? currSeqCount : seqCount;
            currSeqCount = 0;

        }
    }

    longestSequence = "0".repeat(seqCount);
    console.log(`Longest sequence of consecutive zeroes in "${binaryStr}" is "${longestSequence}".`);

};

longestZeroSequence("01100001011000");
