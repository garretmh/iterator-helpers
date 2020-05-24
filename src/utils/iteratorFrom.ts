export default function iteratorFrom<T>(iterable: Iterable<T>): Iterator<T> {
  return iterable[Symbol.iterator]();
}
