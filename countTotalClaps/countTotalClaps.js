const countClaps = (claps) => {

	let totalClaps = 0;

	for (let i = 0; i < claps.length; i++) {

		if (claps[i] === "C") {

			totalClaps++;

		}

	}

	console.log(totalClaps);

};

countClaps("ClaClaClaClapClaClaClaClap!");
