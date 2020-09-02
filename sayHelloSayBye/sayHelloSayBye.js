let sayHelloBye = function (name, num) {
    let capName = name[0].toUpperCase() + name.slice(1).toLowerCase(),
        greetStr = null;

    if (num === 1) {

        greetStr = "Hello " + capName;

    } else {

        greetStr = "Bye " + capName;

    }

    console.log(greetStr);

};

sayHelloBye("naveen", 1);
