let getStudentNamesFromArrObj = function (studentNamesArrObj) {
    let studentNamesArr = [];

    for (let i = 0; i < studentNamesArrObj.length; i++) {
        studentNamesArr.push(studentNamesArrObj[i].name);
    }

    console.log(`Array of student names is [${studentNamesArr}].`);

};

getStudentNamesFromArrObj([
    {
        name: "Naveen"
    },
    {
        name: "Aman"
    },
    {
        name: "Jayesh"
    },
    {
        name: "Vivek"
    },
    {
        name: "Karma"
    }
]);
