export default function divideFunction(numerator, denominator) {
  try {
    if (denominator !== 0) {
      return numerator / denominator;
    }
    return new Error('cannot divide by 0');
  } catch (error) {
    return (error);
  }
}
