let arrChunks = function (arr, chunkSize) {
    let arrWithChunks = [],
        startIndex = 0,
        endIndex = chunkSize;

    for (let i = 0; i < arr.length; i += chunkSize) {
        arrWithChunks.push(arr.slice(startIndex, endIndex));
        startIndex = endIndex;
        endIndex += chunkSize;
    }

    console.log(arrWithChunks);
};

arrChunks([8, 26, 20, 11, 20, 19], 4);
