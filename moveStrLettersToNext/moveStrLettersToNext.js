let moveStrLetters = function (word) {
    let nextLetters = "",
        alphabets = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++) {
        let index = alphabets.indexOf(word[i]);
        nextLetters += alphabets.charAt(index + 1);
    }

    console.log(`After changing every letter of "${word}" to the next letter we got : "${nextLetters}".`);

};

moveStrLetters("javascript");
