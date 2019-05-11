function missing3rdAngle(angle1, angle2) {
    let restValueOfAngle = 180 - (angle1 + angle2);
    if (restValueOfAngle < 90) {
        console.log(`The missing third angle is 'acute' with the value of ${restValueOfAngle}.`);
    } else if (restValueOfAngle >= 90) {
        if (restValueOfAngle === 90) {
            console.log(`The missing third angle is 'right' with the value of ${restValueOfAngle}.`);
        } else {
            console.log(`The missing third angle is 'obtuse' with the value of ${restValueOfAngle}.`);
        }
    }
}

missing3rdAngle(22, 50);
