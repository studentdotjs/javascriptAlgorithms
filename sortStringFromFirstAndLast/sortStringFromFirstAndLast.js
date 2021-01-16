const rearrangeStr = (str) => {

    let strSplit = str.split(""),
        rearrangedStrsArr = [];

    rearrangedStrsArr.push(strSplit.sort().join(""), strSplit.sort().reverse().join(""));

    console.log(rearrangedStrsArr);

};

rearrangeStr("javascript");
