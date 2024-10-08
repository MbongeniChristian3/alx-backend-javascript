export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer and a corresponding Int8Array view
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  return int8Array;
}

// Example usage:
try {
  const typedArray = createInt8TypedArray(5, 2, 10);
  console.log(typedArray); // Output: Int8Array(5) [0, 0, 10, 0, 0]
} catch (error) {
  console.error(error.message);
}
