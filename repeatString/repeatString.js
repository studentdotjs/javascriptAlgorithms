const repeatStrNTimes = (str, intN) => {

    let repeatedStr = typeof (str) === "string" ? str.repeat(intN) : "Not A String !!";

    console.log(repeatedStr);

};

repeatStrNTimes("JavaScript", 6);
