export default function reverse<T>(iterable: Iterable<T>): Iterable<T> {
  return Array.from(iterable).reverse();
}
