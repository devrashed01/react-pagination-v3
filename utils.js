export default function createNumberArray(start, end) {
  // Check if start is greater than end
  if (start > end) {
    return [];
  }

  // Initialize an empty array to store the numbers
  let numberArray = [];

  // Loop from start to end (inclusive) and push each number into the array
  for (let i = start; i <= end; i++) {
    numberArray.push(i);
  }

  return numberArray;
}
