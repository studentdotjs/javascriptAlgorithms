let stupidAddition = function (int1, int2) {
    let answer = null;

    if (typeof int1 === "number" && typeof int2 === "number") {
        answer = String(int1) + int2;
    } else if (typeof int1 === "string" && typeof int2 === "string") {
        answer = parseInt(int1) + parseInt(int2);
    }

    console.log(answer);

};

stupidAddition("5", "58");
