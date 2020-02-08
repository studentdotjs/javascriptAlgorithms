let getLanguagesByScore = function (score) {
    let pointsArr = [1, 2, 4, 8, 16, 32, 64, 128],
        languagesArr = ["C#", "C++", "Java", "JavaScript", "PHP", "Python", "Ruby", "Swift"],
        newArr = [],
        i = 0,
        scoreCopy = score;

    while (score !== 0) {
        if (score >= pointsArr[i]) {
            i++;
        } else {
            score = score - pointsArr[i - 1];
            newArr.unshift(languagesArr[i - 1]);
            i = 0;
        }
    }

    console.log(`According to user's programming language score ${scoreCopy} user's proficient in these programming languages [${newArr}].`);

};

getLanguagesByScore(23);
