function swapName(fullName) {
    console.log(`Before Swapping : ${fullName}`);
    let fullNameSplit = fullName.split(" ");
    let reverseFullName = fullNameSplit.reverse();
    let swapFullName = reverseFullName.join(" ");
    console.log(`After Swapping : ${swapFullName}`);
}

swapName("Naveen Sharma");
