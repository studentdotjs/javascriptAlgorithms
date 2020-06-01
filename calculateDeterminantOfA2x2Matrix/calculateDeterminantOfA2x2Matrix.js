let calculateDeterminant = function (matrix) {
    let determinant = (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
    console.log(determinant);
};

calculateDeterminant([
  [5, 0],
  [9, 4]
]);
