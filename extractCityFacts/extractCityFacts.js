let cityFactsObjToStr = function (cityObj) {

    let cityFactsStr = `${cityObj.name} has a population of ${cityObj.population} and is situated in ${cityObj.continent}.`;
    console.log(cityFactsStr);

};

cityFactsObjToStr({
    name: "Jaipur",
    population: "31,00,000",
    continent: "Asia"
});
