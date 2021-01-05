const sameUniqueElementsOrNot = (arr1, arr2) => {

	let currElement = null,
		currElementIndex = null,
		currElementCount = 0,
		arr1UniqueElements = [],
		arr2UniqueElements = [];

	for (let i = 0; i < arr1.length; i++) {

		currElement = arr1[i], currElementIndex = arr1.indexOf(currElement);

		while (currElementIndex !== -1) {

			currElementCount++;

			currElementIndex = arr1.indexOf(currElement, currElementIndex + 1);

		}

		if (currElementCount === 1) {

			arr1UniqueElements.push(currElement);

		} else if (arr1UniqueElements.indexOf(currElement) === -1) {

			arr1UniqueElements.push(currElement);

		}

		currElementCount = 0;

	}

	for (let i = 0; i < arr2.length; i++) {

		currElement = arr2[i], currElementIndex = arr2.indexOf(currElement);

		while (currElementIndex !== -1) {

			currElementCount++;

			currElementIndex = arr2.indexOf(currElement, currElementIndex + 1);

		}

		if (currElementCount === 1) {

			arr2UniqueElements.push(currElement);

		} else if (arr2UniqueElements.indexOf(currElement) === -1) {

			arr2UniqueElements.push(currElement);

		}

		currElementCount = 0;

	}

	arr1UniqueElements.length === arr2UniqueElements.length ? console.log(true) : console.log(false);

};

sameUniqueElementsOrNot([11, 49, 51, 49, 5], [1, 20, 20, 21, 23]);
