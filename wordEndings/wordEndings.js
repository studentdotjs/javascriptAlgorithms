function addEndingStr(arr, ending) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i].concat(ending);
    }
    console.log(newArr);
}

addEndingStr(['mon', 'tues', 'wednes', 'thurs', 'fri', 'sat', 'sun'], 'day');
