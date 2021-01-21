const rotateByOne = (list) => {

    let lastItem = list.pop();

    list.unshift(lastItem);

    console.log(list);

};

rotateByOne([10, 1, 21, 20, 23]);
