let howManyOnline = function (nPersonArr) {
    if (nPersonArr.length > 0) {

        if (nPersonArr.length === 1) {

            console.log(`${nPersonArr[0]} Online.`);

        } else if (nPersonArr.length === 2) {

            console.log(`${nPersonArr[0]} and ${nPersonArr[1]} Online.`);

        } else {

            console.log(`${nPersonArr[0]}, ${nPersonArr[1]} and ${nPersonArr.length - 2} More Online.`);

        }

    } else {

        console.log(`No One Online.`);

    }
};

howManyOnline(["Brad", "John", "Steve", "Matt", "Drew", "Phil"]);
