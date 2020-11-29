const returnLastItem = (arrOrStr) => {

    let lastItem;

    if (typeof (arrOrStr) === "string") {

        lastItem = arrOrStr.split("").pop();

    } else if (typeof (arrOrStr) === "object") {

        lastItem = arrOrStr.pop();

    }

    console.log(lastItem);

};

returnLastItem("sunday");
