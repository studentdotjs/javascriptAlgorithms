const convertStrToIntAndViceVersa = (num) => {

    let answer = typeof (num) === "string" ? Number(num) : String(num);

    console.log(answer);

};

convertStrToIntAndViceVersa(1031);
