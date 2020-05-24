export default function sum(iterable: Iterable<number>): number {
  let sum = 0;
  for (const value of iterable) {
    sum += value;
  }
  return sum;
}
