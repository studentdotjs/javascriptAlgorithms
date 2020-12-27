const nLastDaysOfCovid19 = (recoveredCases, newCases, activeCases) => {

	let actualDailyRecoveredCases = recoveredCases - newCases,
		covid19NEndingDays = Math.ceil(activeCases / actualDailyRecoveredCases);

	console.log(covid19NEndingDays);

};

nLastDaysOfCovid19(14000, 9500, 297000);
