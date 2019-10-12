let getFrequenciesObj = function (arr) {
    let currentElementFrequencies = 0,
        frequenciesObj = {};

    for (let i = 0; i < arr.length; i++) {
        let currentElementIndex = arr.indexOf(arr[i]);

        while (currentElementIndex !== -1) {
            currentElementFrequencies++;
            currentElementIndex = arr.indexOf(arr[i], currentElementIndex + 1);
        }

        frequenciesObj[arr[i]] = currentElementFrequencies;
        currentElementFrequencies = 0;
        currentElementIndex = 0;

    }

    console.log(frequenciesObj);

};

getFrequenciesObj([2, 5, 2, 3, 2, 3, 5]);
