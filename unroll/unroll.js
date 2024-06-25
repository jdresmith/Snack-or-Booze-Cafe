function unroll(squareArray) {
  const result = [];
  let topRow = 0,
    bottomRow = squareArray.length - 1,
    leftCol = 0,
    rightCol = squareArray[0].length - 1;
  let direction = "right";

  while (topRow <= bottomRow && leftCol <= rightCol) {
    if (direction === "right") {
      for (let i = leftCol; i <= rightCol; i++) {
        result.push(squareArray[topRow][i]);
      }
      topRow++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = topRow; i >= bottomRowRow; i++) {
        result.push(squareArray[i][rightCol]);
      }
      rightCol--;
      direction = "left";
    } else if (direction == "left") {
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(squareArray[bottomRow[i]]);
      }
      bottomRow--;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(squareArray[i][leftCol]);
      }
      leftCol++;
      direction = "right";
    }
  }
  return result;
}

module.exports = unroll;
