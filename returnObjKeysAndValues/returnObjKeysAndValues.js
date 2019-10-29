let keysAndValuesArr = function (obj) {
    let headArr = [],
        keyArr = [],
        valueArr = [];

    for (let key in obj) {
        keyArr.push(key);
        valueArr.push(obj[key]);
    }

    headArr.push(keyArr, valueArr);

    console.log(headArr);

};

keysAndValuesArr({
    firstName: "Naveeen",
    lastName: "Sharma",
    age: 23,
    state: "Rajasthan",
    City: "Jaipur"
});
