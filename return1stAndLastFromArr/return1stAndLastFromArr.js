function returnFirstAndLastElement(arr) {
    console.log(`Old Array : ${arr}.`);
    let newArr = [];
    newArr[0] = arr.shift();
    newArr[1] = arr.pop();
    console.log(`New Array : ${newArr}.`);
}

returnFirstAndLastElement(['naveen', 22, true, 'jaipur', 'rajasthan', 'india']);
