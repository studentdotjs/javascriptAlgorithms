let minutesToSeconds = function (vidLengthStr) {
    let vidLengthSplit = vidLengthStr.split(":"),
        totalSeconds = null;

    if (vidLengthSplit[1] < 60) {

        totalSeconds = (vidLengthSplit[0] * 60) + parseInt(vidLengthSplit[1]);
        console.log(totalSeconds);

    } else {

        console.log(false);

    }

};

minutesToSeconds("14:12");
