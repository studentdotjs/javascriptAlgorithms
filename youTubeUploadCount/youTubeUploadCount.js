const countTotalMonthUploads = (uploadDatesArr, uploadMonth) => {

	let totalUploadsOfMonth = 0;

	uploadDatesArr.forEach(function (date) {

		if (date.startsWith(uploadMonth) === true) {

			totalUploadsOfMonth++;

		}

	});

	console.log(totalUploadsOfMonth);

};

countTotalMonthUploads(["July 26", "May 21", "July 03"], "July");
