const checkDoubleEquality = (arg1, arg2) => {

    let answer = typeof (arg1) === typeof (arg2) && arg1 === arg2 ? true : false;

    console.log(answer);

};

checkDoubleEquality(26, "Tuesday");
