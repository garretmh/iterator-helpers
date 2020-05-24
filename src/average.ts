export default function average(iterable: Iterable<number>): number {
  let sum = 0;
  let size = 0;
  for (const value of iterable) {
    sum += value;
    size++;
  }
  return sum / size;
}
