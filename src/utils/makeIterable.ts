export default function makeIterable<T>(iterator: Iterator<T>): Iterable<T> {
  const iterable = Object.create(null);
  iterable[Symbol.iterator] = () => iterator;
  return iterable;
}
