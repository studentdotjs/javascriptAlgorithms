let threeProgrammersSolution = function (wage1, wage2, wage3) {
    let difference = Math.max(wage1, wage2, wage3) - Math.min(wage1, wage2, wage3);
    console.log(difference);
};

threeProgrammersSolution(17, 3, 29);
