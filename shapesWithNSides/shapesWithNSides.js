let nSidedShape = function (n) {
    let shapeName = null;

    switch (n) {
        case 1:
            shapeName = "circle";
            break;
        case 2:
            shapeName = "semi-circle";
            break;
        case 3:
            shapeName = "triangle";
            break;
        case 4:
            shapeName = "square";
            break;
        case 5:
            shapeName = "pentagon";
            break;
        case 6:
            shapeName = "hexagon";
            break;
        case 7:
            shapeName = "heptagon";
            break;
        case 8:
            shapeName = "octagon";
            break;
        case 9:
            shapeName = "nonagon";
            break;
        default:
            shapeName = "decagon";
    }

    console.log(shapeName);

};

nSidedShape(9);
