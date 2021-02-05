function compareStrings(str1, str2) {

    let answer = null;

    if (str1.length === str2.length) {

        answer = "Equal";

    } else {

        answer = "Not Equal";

    }

    console.log(answer);

}

compareStrings("hello", "world");
