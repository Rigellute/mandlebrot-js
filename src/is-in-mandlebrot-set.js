export default function checkIfBelongsToMandelbrotSet(x, y, maxIterations) {
  let realComponentOfResult = x;
  let imaginaryComponentOfResult = y;

  for (let i = 0; i < maxIterations; i += 1) {
    // Calculate the real and imaginary components of the result
    // separately
    const tempRealComponent =
      realComponentOfResult ** 2 - imaginaryComponentOfResult ** 2 + x;

    const tempImaginaryComponent =
      2 * realComponentOfResult * imaginaryComponentOfResult + y;

    realComponentOfResult = tempRealComponent;
    imaginaryComponentOfResult = tempImaginaryComponent;

    // Is in Mandlebrot set
    if (realComponentOfResult * imaginaryComponentOfResult > 5) {
      return i / maxIterations * 100;
    }
  }

  return 0; // Not in the set
}
