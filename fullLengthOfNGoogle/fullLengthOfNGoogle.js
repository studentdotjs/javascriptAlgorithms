const findFullLenOfGoogle = (n) => {

    let fullLenOfGoogle = null;

    if (n > 1) {

        fullLenOfGoogle = "G".concat("o".repeat(n)).concat("gle");

    } else {

        fullLenOfGoogle = "invalid";

    }

    console.log(fullLenOfGoogle);

};

findFullLenOfGoogle(38);
